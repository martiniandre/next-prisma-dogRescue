import { ChangeEvent, useState } from "react";
import { Search } from "..";
import DogCard from "../../../common-components/DogCard";
import { IDogs } from "../../../types/dogs.type";
import { ListContainer, MainContent, SearchContainer } from "./style";

interface IShowProps {
  dogs: IDogs[];
  handleSearch: (search: Search) => void;
}

const ShowDogs = ({ dogs, handleSearch }: IShowProps) => {
  const [search, setSearch] = useState<Search>({
    name: "",
    breed: "",
  });

  const handleState = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearch({
      ...search,
      [name]: value,
    });
  };

  return (
    <MainContent>
      <ListContainer>
        {!dogs.length ? (
          <h1>Dogs not found </h1>
        ) : (
          dogs?.map((dog, index) => <DogCard dog={dog} key={index} />)
        )}
      </ListContainer>
      <SearchContainer>
        <strong>Search for a Dog</strong>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleState}
        />
        <input
          type="text"
          name="breed"
          placeholder="breed"
          onChange={handleState}
        />
        <button onClick={() => handleSearch(search)}>Search</button>
      </SearchContainer>
    </MainContent>
  );
};

export default ShowDogs;
