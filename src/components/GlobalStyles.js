import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration:none;
        color:inherit;
    }
    * {
        box-sizing:border-box;
    }
    html {
        font-size:10px;
    }
    body{
        font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
        background-color:rgba(20, 20, 20, 1);
        color: #fff;
        padding-top: 50px;
    }
`;

export default GlobalStyles;
