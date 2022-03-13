import Link from "next/link";
import styled from "styled-components";

export const Container = styled.nav`
    background: var(--primary);
    color: var(--white);
`
export const UserAction = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;  
    transition: color 1s;

    h1{
      font-size: 1.5rem;
      font-weight: 500;
      
      a{
        color: var(--white);
      }
    }

    

`

export const Content = styled.div`
    max-width:1280px;
    display:flex;
    justify-content:space-between;
    margin: 0 auto;
    padding: 2rem 1rem;
`

export const NavAction = styled(Link)`
  color: var(--white);
  font-size: 1rem;
  font-weight: bold;
  align-self: center;

  &:hover{
    opacity: 0.8;
    border-bottom: 1px solid var(--white);
  }
`