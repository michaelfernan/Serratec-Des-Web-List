import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image:url(https://sdx.pt/assets/fotos/mesa.jpg);
        color: darkgreen;
        background-size:115%;
           }

    body, input, textarea, button {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        font-size: 1rem; 
    }

    input, textarea, button {
        cursor: pointer;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px #00875f;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.7;
    }

`;