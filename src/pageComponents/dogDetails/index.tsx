import { useState } from "react";
import LoadingCircle from "../../common-components/Loading";
/* import DogService from "../../services/DogService"; */
import { IDogs } from "../../types/dogs.type";
import {
  Container,
  DetailsContainer,
  DogGallery,
  DogInfo,
  Title,
} from "./styles";

const DogInformation = ({ dog }: { dog: IDogs }) => {
  /* const { dogID } = useParams<"dogID">(); */
  const dogID = null;

  return (
    <Container>
      {!dog ? (
        <p>Dog not found</p>
      ) : (
        <>
          <Title>Conheça {dog?.name}</Title>
          <DetailsContainer>
            <DogInfo>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                convallis, mi malesuada sagittis mollis, eros odio lobortis
                arcu, nec malesuada nisl elit in sem. Suspendisse euismod lectus
                id auctor hendrerit. Proin rhoncus risus ut dui tempus, non
                ullamcorper eros varius. Donec eleifend, ipsum ut ultricies
                viverra, velit nibh sollicitudin nibh, venenatis rhoncus nulla
                lorem quis justo. Nullam eget nunc in nulla maximus tristique et
                egestas ligula. Nunc neque sem, interdum vel tempor hendrerit,
                maximus vitae ipsum. Cras nec enim a libero sodales fringilla
                eget at orci. Duis varius ligula ut arcu elementum blandit.
              </p>
              <p>
                Integer porta felis vitae hendrerit ornare. Suspendisse pharetra
                leo quis ante suscipit ullamcorper. Praesent eget orci vitae
                massa accumsan finibus a ac purus. Aliquam et sem sagittis,
                dignissim orci et, ultrices nisl. Curabitur at hendrerit felis.
                Integer hendrerit pharetra odio nec sodales. Nulla bibendum elit
                in augue faucibus efficitur. Pellentesque eget turpis eu ipsum
                facilisis pretium vitae non ante. Nunc id tellus vestibulum,
                efficitur ex at, fringilla ipsum. Nullam interdum lobortis
                fermentum. Nullam eu luctus mi. Sed turpis massa, molestie a
                ultricies id, aliquam ut nibh. Praesent non lorem nulla.
              </p>
              <p>
                Suspendisse ullamcorper pellentesque tellus non vulputate.
                Praesent eleifend venenatis dolor, sed venenatis erat euismod a.
                Sed sit amet ligula ut mi egestas congue. Maecenas sed purus
                efficitur, suscipit nisi non, dictum nisl. In dignissim in massa
                vel bibendum. Sed urna elit, fermentum non ante a, elementum
                tincidunt quam. Pellentesque sed convallis est, in rutrum massa.
                Aenean pretium mi vitae turpis dictum, a euismod augue iaculis.
                Maecenas placerat suscipit tortor sit amet interdum. Nam sed
                feugiat diam. Curabitur a accumsan mi. Vivamus bibendum diam
                dui, et hendrerit odio semper a. Phasellus ac tortor nisl. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
                aliquet lorem.
              </p>
            </DogInfo>
            <DogGallery>
              <img alt={dog?.name} src={dog.photo} />
              <div>
                <strong>Name: {dog?.name}</strong>
                <strong>Breed: {dog?.breed}</strong>
                <strong>Age: {dog?.age} years</strong>
                <strong>Current Owner: {dog?.currentOwner}</strong>
                <strong>Localization: {dog?.location}</strong>
              </div>
            </DogGallery>
          </DetailsContainer>
        </>
      )}
    </Container>
  );
};

export default DogInformation;
