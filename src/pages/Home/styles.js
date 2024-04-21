import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: grid;
grid-template-rows: 80px auto 100px;
grid-template-areas:
"header"
"content"
"footer";

> main {
grid-area: content;
justify-self: center;
width: 100vw;


> div {
padding: 0;
width: calc(100% - 40px);
margin: 30px 20px;

header {
height: 120px;
display: flex;
align-items: center;
justify-items: center;
justify-content: center;

background: linear-gradient(
180deg, 
${({ theme }) => theme.COLORS.GRADIENT_100} 0%, 
${({ theme }) => theme.COLORS.GRADIENT_200} 100%
);

position: relative;

img {
position: absolute;
left: -20px;
bottom: 0;
}

div {
width: 200px;
position: absolute;
right: -10px;

color: ${({ theme }) => theme.COLORS.GRAY_200};

h1 {
font-family: "Poppins", sans-serif;
font-weight: 600;
font-size: 15px;
}

p {
font-size: 12px;
margin-top: 7px;
}
}
}
}
}

@media (min-width: 1024px) {

height: 100vh;
grid-template-rows: 90px auto 90px;

> main {
overflow-y: auto;
::-webkit-scrollbar {
width: 10px;
}

::-webkit-scrollbar-thumb {
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
border-radius: 7px;
}

> div {
padding: 0 200px;
width: calc(100% - 200px);
margin: 180px 100px 70px;

header {
height: 250px;
border-radius: 7px;

img {
position: absolute;
left: -40px;
bottom: 0;
}

div {
width: 472px;
right: 100px;

h1 {
font-weight: 500;
font-size: 40px;
}

p {
font-size: 16px;
line-height: 100%;
}
}
}
}
}
}
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
margin-top: 50px;

section > h2 {
font-family: "Poppins", sans-serif;
font-weight: 500;
font-size: 22px;
line-height: 140%;

color: ${({ theme }) => theme.COLORS.GRAY_200};
}

swiper-container {
height: 380px;
}

swiper-slide {
max-width: 200px;
}

@media (min-width: 1024px) {
gap: 30px;

section > h2 {
font-size: 30px;
}

swiper-container {
height: 500px;
}

swiper-container::before,
swiper-container::after {
content: '';
position: absolute;
top: 0;
bottom: 0;
width: 350px;
z-index: 2;
pointer-events: none;
}

swiper-container::before {
left: 0;
background: linear-gradient(
90deg, 
rgba(0, 0, 0, 1) 0%,
transparent 100%
);
}

swiper-container::after {
right: 0;
background: linear-gradient(
90deg, 
transparent 0%,
rgba(0, 0, 0, 1) 100%
);
}

swiper-slide {
max-width: 300px;
}
}
`;

export const Footer = styled.div`
padding: 0 10px;
display: flex;
width: 100%;
align-items: center;
justify-content:space-between;
font-size: 10px;
gap: 5px;
justify-items: center;

> img {
width: 120px;
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