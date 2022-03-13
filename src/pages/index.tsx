import { useEffect, useState } from "react";
import Footer from "../common-components/Footer";
/* import DogService from "../services/DogService"; */
import { IDogs } from "../types/dogs.type";
import Newsletter from "../pageComponents/Home/Newsletter";
import Services from "../pageComponents/Home/Services";
import ShowDogs from "../pageComponents/Home/ShowDogs";
import Navbar from "../common-components/Navbar";

export type Search = {
  name: string;
  breed: string;
};

export default function Home() {
  const [dogs, setDogs] = useState<IDogs[]>([]);
  const [dogsAux, setDogsAux] = useState(dogs);

  /*   async function fetchDogs() {
    const dogs = await DogService.getAll();
    setDogs(dogs);
    setDogsAux(dogs);
  }

  useEffect(() => {
    fetchDogs();
  }, []); */

  const handleSearch = ({ name, breed }: Search) => {
    let dog = dogsAux;
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

    setDogs(dog);
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
