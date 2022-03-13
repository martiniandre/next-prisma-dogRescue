import styled from "styled-components"

export const MainContent = styled.div`
max-width:1280px;
margin: 0 auto;
padding: 3rem 1rem;
display:grid;
gap: 2rem;

@media(min-width:320px) and (max-width:768px){
  grid-template-columns: 1fr;
}
`

export const ListContainer = styled.section`
display:grid;
grid-template-columns: repeat(5,1fr);
gap: 1rem;
`
