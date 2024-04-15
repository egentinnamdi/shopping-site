import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --primary-color: #00A218;
    --secondary-color: #000;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    padding: 20px;
    position: relative;
}
`;

export default GlobalStyle;
