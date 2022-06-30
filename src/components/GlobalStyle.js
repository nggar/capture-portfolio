import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
    background: #1b1b1b;
    font-family: 'inter', 'sans-serif';
    font-size: 1.6rem;
    overflow-x: hidden;
}

button {
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1.2rem 2.4rem;
    border: 1px solid #23d997;
    background: transparent;
    color: white;
    transition: all .5s ease;
    &:hover {
        background-color: #23d997;
    }
}

h2 {
    font-weight: lighter;
    font-size: 4.2rem;
}
h3 {
    color: white;
    font-size: 1.6rem;
}
h4 {
    font-weight: bold;
    font-size: 2rem;
}
p {
    padding: 3rem 0rem;
    color: #ccc;
    line-height: 150%;
}
a {
    font-size: 1.4rem;
}
span {
    font-weight: bold;
    color: #23d997;
}

`

export default GlobalStyle;