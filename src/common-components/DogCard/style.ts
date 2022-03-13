import styled from "styled-components";

export const Container = styled.div`
  max-width: 320px;
  border: 1px solid black;
  border-radius:10px;

  img {
    width: 100%;
    max-width: 100%;
    height: 200px;
    border-radius: inherit;
  }
  
  strong {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  button {
    background: none;
    border: none;
  }

  div {
    padding: 0 10px 5px;
  }

  span {
    display: block;
  }
`