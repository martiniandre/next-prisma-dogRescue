import { GetServerSideProps, GetStaticProps } from "next";
import prisma from "../../lib/prisma";
import Navbar from "../../common-components/Navbar";
import DogInformation from "../../pageComponents/dogDetails";
import { IDogs } from "../../types/dogs.type";

interface DogPage {
  dog: IDogs | null;
  error: string;
}

export default function DogDetails({ dog }: DogPage) {
  return (
    <>
      <Navbar />
      <DogInformation dog={dog} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { dogID } = params;
  try {
    const dog = await prisma.dog.findUnique({
      where: { dog_id: String(dogID) },
    });
    if (!dog) return { props: { dog: null } };
    return {
      props: {
        dog,
      },
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
};
