import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    @font-face {
        font-family: "exquisite_corpse";
        src: url("fonts/exquisite_corpse.ttf?") format("truetype");
    }
        font-family: exquisite_corpse;
        font-weight: 5;
        /* font-size: 20px; */
    }
`;

export default GlobalStyle;
