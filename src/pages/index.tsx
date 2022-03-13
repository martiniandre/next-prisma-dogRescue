import { useState } from "react";
import Footer from "../common-components/Footer";
/* import DogService from "../services/DogService"; */
import { IDogs } from "../types/dogs.type";
import Newsletter from "../pageComponents/Home/Newsletter";
import Services from "../pageComponents/Home/Services";
import ShowDogs from "../pageComponents/Home/ShowDogs";
import Navbar from "../common-components/Navbar";
import prisma from "../lib/prisma";
import { GetServerSideProps } from "next";

export type Search = {
  name: string;
  breed: string;
};

export default function Home({ dogs }: { dogs: IDogs[] }) {
  const [dogsAux, setDogsAux] = useState(dogs);

  const handleSearch = ({ name, breed }: Search) => {
    let dog = dogs;
    if (name) {
      dog = dogsAux.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (breed) {
      dog = dogsAux.filter((dog) =>
        dog.breed.toLowerCase().includes(breed.toLowerCase())
      );
    }

    setDogsAux(dog);
  };

  return (
    <>
      <Navbar />
      <ShowDogs dogs={dogs} handleSearch={handleSearch} />
      <Services />
      <Newsletter />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const dogs = await prisma.dog.findMany();
  return { props: { dogs } };
};
