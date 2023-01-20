import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #4B89BF;
    --secondary-color: #77B9F2;
    --tertiary-color: #A2CDF2;
    --white: #FEFEFE;
    --grey-0: #F0F1F2;
    --grey-1: #737373;
    --grey-2: #444444;
    --grey-3: #222222;
    --red: #FF2222;
  }

  * {
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      font-size: 100%;
      box-sizing: border-box;
      vertical-align: baseline;
    }

  ul {
    list-style: none;
  }

  body {
    line-height: 1;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;
