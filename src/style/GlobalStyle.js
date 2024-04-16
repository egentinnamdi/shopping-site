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
/* .active{
    color: green;
    border: 5px solid #333;
} */
`;

export default GlobalStyle;
