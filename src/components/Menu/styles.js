import styled from "styled-components";

export const Container = styled.div`
position: fixed;
width: 100%;
height: 100vh;
z-index: 10;
display: grid;
grid-template-rows: 100px auto;
grid-template-areas:
"header"
"content";

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
transition: opacity 0.7s ease-out, visibility 0.7s ease-out;

> main {
grid-area: content;
justify-self: center;

width: calc(100% - 90px);

> div {
margin-bottom: 10px;

input {
max-width: 100%;
}
}

button {
width: 100%;
padding: 10px 0;
border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};
font-size: 25px;
font-weight: 300;
}
}
`;
