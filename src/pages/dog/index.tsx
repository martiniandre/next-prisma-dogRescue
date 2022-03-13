import { GetServerSideProps } from "next";
import prisma from "../../lib/prisma";
import Navbar from "../../common-components/Navbar";
import { IDogs } from "../../types/dogs.type";
import { ListContainer, MainContent } from "../../pageComponents/Dog/styles";
import DogCard from "../../common-components/DogCard";

interface DogPage {
  dogs: IDogs[];
}

export default function Dog({ dogs }: DogPage) {
  return (
    <>
      <Navbar />
      <MainContent>
        <ListContainer>
          {!dogs.length ? (
            <h1>Dogs not found </h1>
          ) : (
            dogs?.map((dog, index) => <DogCard dog={dog} key={index} />)
          )}
        </ListContainer>
      </MainContent>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const dogs = await prisma.dog.findMany();
  return { props: { dogs } };
};
