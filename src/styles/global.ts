import { createGlobalStyle } from "styled-components";

export const CreateGlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
--primary-color: #517879;
--secondary-color: #1e3e57;
--red-color: #b12126;
--text-color-dark: #2c3545;
--text-color-white: #ffffff;
}

html {
  scroll-behavior: smooth;
}
button{
    cursor: pointer;
}

body{
    font-family: 'Poppins', sans-serif;
}

.selected{
    border-bottom: 3px solid var(--primary-color)!important; 
}
`;
