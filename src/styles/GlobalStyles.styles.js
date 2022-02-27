import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
    html,
    body {
	background: ${(props) => props.theme.white};
    height: 100%;
    color: ${(props) => props.theme.white};
	font-family: "Roboto", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
h1 {
    font-size: 1.8rem;
    font-weight: 500
}
h2 {
    font-size: 1.4rem;
    font-weight: 500
}
h3 {
    font-size: 1.2rem;
}
p {
    font-size: 1rem;
}
li {
    font-size: 1rem;
}
@media (max-width: 768px) {
    h1 {
    font-size: 1.6rem;
    }
    h2 {
    font-size: 1.2rem;
    }
    h3 {
    font-size: 1rem;
    }
    p {
    font-size: 0.9rem;
    }
    li {
    font-size: 0.9rem;
}
}
    `;

export default GlobalStyles;
