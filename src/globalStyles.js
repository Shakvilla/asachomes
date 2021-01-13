import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
}

html, body{
    overflow-x: hidden;
} 

`

export default GlobalStyles;