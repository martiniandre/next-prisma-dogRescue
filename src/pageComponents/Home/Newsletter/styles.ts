import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    padding: 3rem 1rem;
    flex: 1;
    form{
      width: 100%;
      max-width:1280px;
      display: flex;
      gap: 10px;
      justify-content:center;
      margin: 0 auto;
      padding: 1rem;
    }

    input{
      width: 60%;
      padding: 10px;
      border:1px solid black;
      border-radius: 5px;
    }
    button{
      padding: 10px 20px;
      color:var(--white);
      background: var(--primary);
      font-size: 1.1rem;
      transition: filter 0.5s ease-out;

      &:hover{
        filter: brightness(0.8)
      }
    }
`