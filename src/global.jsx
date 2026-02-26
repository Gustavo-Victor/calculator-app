import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        padding: 0; 
        margin: 0;
        box-sizing: border-box;
    }
    
    body {        
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        width: 100%; 
        height: auto;
    }
`; 

