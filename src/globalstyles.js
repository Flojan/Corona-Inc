import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    @font-face {
        font-family: "ALPHD";
        src: url("fonts/ALPHD.ttf?") format("truetype");
    }
        font-family: ALPHD;
        font-weight: 8;
        /* font-size: 20px; */
    }
`;

export default GlobalStyle;
