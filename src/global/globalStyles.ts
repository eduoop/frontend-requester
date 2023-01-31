import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #fff;
    --white-200: #F8F9FA;
    --white-300: #F5F8FA;
    --white-500: #E5E5E5;

    --gray-300: #F2F2F2;
    --gray-900: #706E8F;

    --red-700: rgb(214, 35, 0);
    --brown-700: rgb(80, 35, 20);

    --black-700: #1F1F1F;
  }

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Poppins;
}

body {
  overflow-x: hidden;
  overflow-y: scroll;
  background: var(--white-200);
}

button {
  cursor: pointer;
}
`;