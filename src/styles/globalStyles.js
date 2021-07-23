import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --primary-font: 'Playfair Display', serif;
    --secondary-font:  'Space Mono', monospace;
    --accent-color: #ffc800;
    --code-red: #e63946da;
    --box-shadow: rgba(50, 50, 90, 0.25) 0px 8px 10px -5px,
      rgba(0, 0, 0, 0.2) 0px 8px 10px -8px,
      rgba(10, 40, 50, 0.2) 0px -2px 5px 0px inset;
    --hover-box-shadow: rgba(50, 50, 90, 0.25) 0px 3px 5px -3px,
      rgba(0, 0, 0, 0.2) 0px 3px 5px -3px,
      rgba(10, 40, 50, 0.2) 0px -1px 3px 0px inset;
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
    background-color: #ffffffda;
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
    min-height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 600px) {
        width: 95%;
    }
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

#to-login, 
#to-signup, 
#google-auth-signin, 
#login-button, 
#logout-button, 
#signup-button, 
#back-home-link {
    padding: 0.5rem;
    width: 6rem;
    font-size: 1rem;

    border-radius: 0.5rem;
    background-color: var(--accent-color);
    box-shadow: var(--box-shadow);
    transition: all 200ms ease-in-out;

    &:hover, &:focus {
      box-shadow: var(--hover-box-shadow);
    }
  }

#back-home-link {
    width: 3rem;
    color: #000;
    font-size: 2rem;
}
`;
