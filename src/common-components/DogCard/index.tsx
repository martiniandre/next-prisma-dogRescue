import { IDogs } from "../../types/dogs.type";
import { Container } from "./style";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MouseEvent, useState } from "react";
import Link from "next/link";

interface IDogCard {
  dog: IDogs;
}

const DogCard = ({ dog }: IDogCard) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setFavorite(!favorite);
    return false;
  };

  return (
    <Container>
      <Link href={`dog/${dog?.dog_id}`}>
        <img src={dog.photo} alt={dog.name} />
        <div>
          <strong>
            <h1>{dog.name}</h1>
            <button onClick={handleFavorite}>
              {favorite ? (
                <AiFillStar size={20} fill="yellow" />
              ) : (
                <AiOutlineStar size={20} />
              )}
            </button>
          </strong>
          <span>Age: {dog.age}</span>
          <span>Breed: {dog.breed}</span>
          <span>Owner: {dog.currentOwner}</span>
        </div>
      </Link>
    </Container>
  );
};
export default DogCard;
