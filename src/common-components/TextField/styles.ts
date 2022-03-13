import  styled  from 'styled-components';

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  width:100%;
  border-radius: 5px;

  &:focus{
    border: 1px solid var(--primary);
  }
`