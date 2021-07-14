import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --primary-font: 'Playfair Display', serif;
    --secondary-font: 'Lato', sans-serif;
    --accent-color: #ffc800;
}

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
    font-family: var(--primary-font);
}

#root {
    width: 100%;
    height: 100%;
}

.container {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

#loading-indicator {
    width: 100%;
    height: 100%;
    text-align: center;
}

input, textarea, button, select {
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
