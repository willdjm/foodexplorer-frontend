import styled from "styled-components";

export const Container = styled.div`
display: grid;
min-height: 100vh;
grid-template-rows: 100px auto 100px;
grid-template-areas:
"header"
"content"
"footer";

> main {
grid-area: content;
justify-self: center;

> div {
padding: 0;
width: calc(100% - 40px);
margin: 0px 20px;
}
}

.buttons {
display: flex;
justify-content: center;
gap: 10px;
margin-top: 20px;
}

.edit {
padding: 10px;
}

.include {
max-width: 280px;
gap: 10px;
border-radius: 7px;
padding: 10px;
font-size: 14px;
}

@media (min-width: 375px) {
.buttons {
div span {
font-weight: 700;
font-size: 20px;
}
}
}

@media (min-width: 1024px) {
height: 100vh;
grid-template-rows: 150px auto 100px;

> main {
padding: 0 200px;
width: 100%;
overflow-y: auto;

::-webkit-scrollbar {
width: 10px;
}

::-webkit-scrollbar-thumb {
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
border-radius: 7px;
}

> div {
width: calc(100% - 390px);
margin: 10px 100px;
} 
}

.buttons {
justify-content: start;
gap: 20px;
}

.edit {
max-width: 200px;
}

.include {
max-width: fit-content;
padding: 10px 20px;
font-size: 16px;
}
}
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
margin-top: 30px;


> img {
width: 100%;
max-width: 250px;
}

> div {
display: flex;
flex-direction: column;
gap: 20px;
text-align: center;

h1 {
font-family: "Poppins", sans-serif;
font-weight: 500;
font-size: 25px;

color: ${({ theme }) => theme.COLORS.GRAY_200};
}

p {
font-family: "Poppins", sans-serif;
color: ${({ theme }) => theme.COLORS.GRAY_200};
}

section {
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 5px;
}
}

@media (min-width: 1024px) {
flex-direction: row;
gap: 50px;
margin-top: 30px;

> img {
max-width: 400px;
}

> div {
text-align: left;

h1 {
font-size: 50px;
}

p {
font-size: 20px;
}

section {
justify-content: initial;
gap: 5px;
}
}
}
`;

export const Footer = styled.div`
padding: 0 10px;
display: flex;
width: 100%;
align-items: center;
justify-content:space-between;
font-size: 13px;
gap: 5px;
justify-items: center;

> img {
width: 140px;
}

@media (min-width: 1024px) {
padding: 0 200px;

> span {
font-size: 14px;
}

> img {
width: 200px;
}
}

`;

export const ButtonPicker = styled.div`
display: flex;
align-items: center;
justify-items: center;
justify-content: center;
gap: 10px;
> button {
display: flex;
font-size: 25px;
border: none;
background: none;
color: ${({ theme }) => theme.COLORS.GRAY_200};
transition: filter 0.2s;

&:hover {
filter: brightness(0.9);

}
}
`;