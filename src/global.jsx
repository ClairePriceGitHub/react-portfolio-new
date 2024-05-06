import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        margin-block-start: 0;
    }

    body {
        // font-family: "Questrial", sans-serif;
        // font-family: "Norwester", sans-serif;
        font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
    }

    h1 {
        font-size: clamp(2rem, 2vi + 2.3rem, 4.2rem);
    }
    h2 {
    }
        font-size: clamp(2.4rem, 1.9vi + 2.1rem, 3.6rem);
    }
    h3 {
        font-size: clamp(2rem, 1.2vi + 1.7rem, 2.7rem);
    }
    h4 {
        font-size: clamp(1.6rem, 0.7vi + 1.4rem, 2rem);
    }
    h5 {
        font-size: clamp(1.3rem, 0.4vi + 1.2rem, 1.5rem);
    }
    p {
        font-size: clamp(1rem, 0.2vi + 1rem, 1.1rem);
    }
    s {
        font-size: clamp(0.8rem, 0.1vi + 0.8rem, 0.8rem);
    }

    
    `;

export default GlobalStyles;