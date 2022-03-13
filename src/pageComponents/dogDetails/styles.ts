import styled from "styled-components";

export const Container = styled.main`
  max-width:1280px;
  margin: 0 auto;
  padding: 3rem 1rem;
  min-height: calc(100vh - 99px)
 
  `
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary);
  display: block;
`

export const DetailsContainer = styled.section `
  display:grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media(min-width:320px) and (max-width:768px){
    display: flex;
    flex-direction: column-reverse;
  }
` 

export const DogInfo = styled.section`
  padding: 5px;
  min-height: 70vh;
  p:not(:last-child){
    margin-bottom:10px;
  }
`

export const DogGallery = styled.div`
  height: fit-content;
  border-radius:10px;
  border: 1px solid #333;

  img{
    border-radius:10px 10px 0 0;
    width:100%;
    height: 100%;
    max-height: 300px;
  }

  div{ 
    display: flex;
    flex-direction:column;
    gap: 10px;
    padding: 10px;
  }
`