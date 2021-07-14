import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 100%;
}
*,*::before,*::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}
body {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    color: #000;
    line-height: 1.4;
    font-family: 'Solway', serif;
}
#root {
    width: 100%;
    height: 100%;
}

.container {
    width: 90%;
    margin: 0 auto;
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

#loading-indicator {
    width: 100%;
    height: 100%;
    text-align: center;
}

input,textarea,button, select {
    font-family: inherit;
}
ul {
    list-style: none;
}
a {
    text-decoration: none;
    color: inherit;
}
img, svg {
    display: block;
}
button {
    border: 0;
    cursor: pointer;
    background-color: inherit;
}
`;
