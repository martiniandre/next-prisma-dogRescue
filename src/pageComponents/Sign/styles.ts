import styled from "styled-components";

interface IActive {
  activeForm: string
}


export const Container = styled.div`
  height:calc(100vh - 99px);
`

export const FormContainer = styled.div`
  height:100%;
  max-width:1280px;
  padding: 3rem 1rem;
  margin: 0 auto;
  display: flex;
  justify-content:center;
  align-items: center;
`


export const Form = styled.form<IActive>`
  height:100%;
  background: var(--ternary);
  width:100%;
  max-width: ${({activeForm}) => activeForm  === 'register' ? '550px' : '550px' };
  max-height:${({activeForm})  => activeForm  === 'register' ? '550px' : '360px' };
  padding:1rem;

  @media(min-width:320px) and (max-width:768px){
    max-height:fit-content;
  }
`

export const GridForm = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap: 20px;

  @media(min-width:320px) and (max-width:768px){
    grid-template-columns:1fr;
    gap: 20px;
  }
`

export const FormFields = styled.div`
  display: flex;
  flex-direction:column;
  gap: 20px;
`

export const Button = styled.button`
  padding: 10px 15px;
  width: 80%;
  max-width: 500px;
  margin: 30px auto 0;
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 5px;
  background: var(--primary);
  color: var(--white);
  transition: filter 1s, color 1s;
  text-transform: uppercase;
  font-size: 1rem;

  &:hover{
    color: #FFF;
    filter: brightness(90%)
  }
` 

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--white);
  font-weight: bold;
  position: relative;
  text-align: center;
  margin-bottom:30px;
`

export const ChangeForm = styled.p`
  margin-top: 10px;
  color: var(--white);
  font-size: 0.8rem;

  &:hover{
    text-decoration: underline;
    opacity:0.7;
  }
`