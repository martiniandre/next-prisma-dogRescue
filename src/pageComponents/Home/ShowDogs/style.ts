import styled from "styled-components";

export const MainContent = styled.div`
  max-width:1280px;
  margin: 0 auto;
  padding: 3rem 1rem;
  display:grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;

  @media(min-width:320px) and (max-width:768px){
    grid-template-columns: 1fr;
  }
`

export const ListContainer = styled.section`
  display:grid;
  grid-template-columns: repeat(4,1fr);
  gap: 1rem;
`

export const SearchContainer = styled.section`
  background-color:var(--primary);
  padding: 2rem 1rem;
  border-radius: 5px;
  height:fit-content;

  strong{
    display:block;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #EFF1F3;
  }

  input{
    width:100%;
    padding: 0.5rem;
    border: 1px solid white;
    border-radius: 5px;
    outline:none;
    margin-bottom: 2rem;
  }
  button{ 
    width: 100%;
    padding: 0.8rem;
    text-align:center;
    background-color:var(--secondary);
    color: white;
    font-size: 1rem;
    font-weight: bold;
    transition: filter 0.6s;

    &:hover{
      filter: brightness(0.9)
    }
  }
  


`