import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body input textarea button {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;
