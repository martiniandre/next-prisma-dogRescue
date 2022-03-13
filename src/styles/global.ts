import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,body{
    max-width:100vw;
    min-height:100vh;
  }
  #root{
    min-height:100vh;
  }
  body{
    background: var(--background);
  }
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  *,button,input{
    border:0;
    outline:0;
    border-radius:0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
  }
  input{
    border: 1px solid var(--primary);
  }
  a{
    text-decoration:none;
  }
  :root{
    --primary:#4969E8/* 6273BD  *//* #7e84f3/ *//*  #3700b3  */;
    --secondary: #23036a/* 6273BD *//* 23036a */;
    --ternary: #1871AC;
    --white:  #FFFAFA;
    --black: #242423;
    --background: #d3d3d3
  }
  @media(max-width:768px){
    body{
      text-align:center;
    }
  }
`;