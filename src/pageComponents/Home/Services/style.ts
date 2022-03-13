import styled from "styled-components";

export const ServicesContainer = styled.section`
  background: var(--primary);
  margin-bottom:2rem;
  `

export const Content = styled.div`
  padding: 1rem;
  max-width: 1280px;
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap: 25px;
  margin: 0 auto;
  color: var(--white);

  @media(min-width:320px) and (max-width:768px){
    grid-template-columns: 1fr;
  }
`

export const ContentItem = styled.div`
  text-align:center;

  & > p {
    margin: 1rem auto 0;
    font-size: 1rem;
  }
`