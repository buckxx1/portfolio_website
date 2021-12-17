import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';



const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  ::-webkit-scrollbar{
    background: #0F1624;

  }
  ::-webkit-scrollbar-track{
    background: #212D45;
  }

  ::-webkit-scrollbar-thumb{
    background-image: linear-gradient(180deg,#13ADC7 0%,#945DD6 100%);
    border-radius: 25px;
  }
`;

export default GlobalStyles;