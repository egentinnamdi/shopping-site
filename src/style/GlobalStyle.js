import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --primary-color: #00A218;
    --secondary-color: #000;
    --white: #fff;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    padding: 20px;
}
`;

export default GlobalStyle;
