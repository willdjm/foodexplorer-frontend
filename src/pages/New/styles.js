import styled from "styled-components";

export const Container = styled.div`
display: grid;
width: 100%;
grid-template-rows: 180px auto 120px;
grid-template-areas:
"header"
"content"
"footer";

> main {
padding: 0;
width: 100%;
grid-area: content;
justify-self: center;
}

.tags {
display: flex;
flex-wrap: wrap;
gap: 5px;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

padding: 10px;
border-radius: 15px;

&:focus-within {
outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
}

input {
background-color: transparent;
}
}

.price {
::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
-webkit-appearance: none;
}
}

.save {
> button {
padding: 10px 20px;

&:disabled {
opacity: 1;
background-color: ${({ theme }) => theme.COLORS.LIGHT_RED};
}
}
}

@media (min-width: 1024px) {
height: 100vh;
grid-template-rows: 90px auto 70px;

> main {
overflow-y: auto;
padding: 0 100px;

::-webkit-scrollbar {
width: 12px;
}

::-webkit-scrollbar-thumb {
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
border-radius: 15px;
}
}

.save {
justify-content: flex-end;

> button {
max-width: 200px;
}
}
}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 10px;

width: calc(100% - 100px);
margin: 16px 50px 80px;

> header {
display: flex;
flex-direction: column;

h1 {
margin-top: 35px;
font-family: "Poppins", sans-serif;
font-weight: 500;
line-height: 140%;

color: ${({ theme }) => theme.COLORS.GRAY_200};
}
}

> div {
display: flex;
flex-direction: column;
gap: 10px;

section {
width: 100%;
}

section input {
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
border-radius: 7px;
}
}

@media (min-width: 1024px) {
gap: 20px;

width: calc(100% - 350px);
margin: 64px 150px 0 185px;

> div {
flex-direction: row;
gap: 50px;

:first-of-type {
section:nth-of-type(1) {
max-width: 366px;
}

section:nth-of-type(3) {
max-width: 570px;
}
}

:nth-of-type(2) {
section:nth-of-type(2) {
max-width: 400px;
}
}
}
}
`;

export const Image = styled.div`
padding: 18px 50px;
border-radius: 7px;
position: relative;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
color: ${({ theme }) => theme.COLORS.WHITE};

&:focus-within {
outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
}

> label {
display: flex;
gap: 10px;
cursor: pointer;

span {
font-family: "Poppins", sans-serif;
font-size: 14px;
line-height: 20px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: calc(100vw - 256px);
}

input {
position: absolute;
right: 0;
z-index: -1;
width: 100%;
}

svg, span {
transition: filter 0.2s;
}

&:hover {
svg, span {
filter: brightness(0.9);
}}}

@media (min-width: 1024px) {
> label {
display: flex;
align-items: center;
justify-content: center;
span {
max-width: 200px;
}

input {
max-width: 300px;
}
}
}
`;

export const Category = styled.div`
> label {
position: relative;

select {
border: none;
-webkit-appearance: none;
cursor: pointer;
width: 100%;
padding: 18px 50px;
border-radius: 7px;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
color: ${({ theme }) => theme.COLORS.GRAY_100};

font-weight: 400;
font-size: 15px;
line-height: 100%;
}

svg {
color: ${({ theme }) => theme.COLORS.GRAY_100};

position: absolute;
top: 0;
right: 25px;
cursor: pointer;
pointer-events: none;
transition: filter 0.2s;
}

&:hover {
svg {
filter: brightness(0.9);
}}}
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