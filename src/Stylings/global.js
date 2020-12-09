import { createGlobalStyle } from 'styled-components';

// background:${({ theme })=> theme.body};
// color: ${({ theme }) => theme.text};
// transition: all 0.25s linear;

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    font-family:Helvetica;
    overflow-x:hidden;
    background-color:#f8f9fa;
  }
  html{
    overflow-x:hidden;
    scroll-behavior: smooth;
  }
  a{
    text-decoration:none;
    color:black;
  }
`

export default GlobalStyle
