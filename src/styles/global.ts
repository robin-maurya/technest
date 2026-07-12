import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: light;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: Inter, Arial, Helvetica, sans-serif;
    transition: background 0.2s ease, color 0.2s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ::selection {
    background: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;
