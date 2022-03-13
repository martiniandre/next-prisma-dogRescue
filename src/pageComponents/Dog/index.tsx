import { useEffect, useState } from "react";
import DogCard from "../../common-components/DogCard";
/* import DogService from "../../services/DogService"; */
import { IDogs } from "../../types/dogs.type";
import { ListContainer, MainContent } from "./styles";

export const Dogs = () => {
  const [dogs, setDogs] = useState<IDogs[]>([]);

  return (
    <MainContent>
      <ListContainer>
        {!dogs.length ? (
          <h1>Dogs not found </h1>
        ) : (
          dogs?.map((dog, index) => <DogCard dog={dog} key={index} />)
        )}
      </ListContainer>
    </MainContent>
  );
};
