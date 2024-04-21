import styled from "styled-components";

export const Container = styled.div`
padding: 80px 30px 0 30px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 50px;

@media (min-width: 1024px) {
padding: 0 350px;
display: flex;
align-items: center;
justify-items: center;
justify-content: center;
flex-direction: row;
justify-content: space-between;
}
`;

export const Brand = styled.div`
display: flex;
justify-content: center;
width: 100%;

> img {
width: 100%;
max-width: 250px;
}

@media (min-width: 1024px) {
justify-content: initial;
margin-inline: 0;

> img {
max-width: 350px;
}
}
`;

export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;

> h2 {
display: none;
}

> section input {
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
border-radius: 12px;
display: flex;
align-items: center;
justify-items: center;
justify-content: center;
}

> a {
color: ${({ theme }) => theme.COLORS.WHITE};
text-align: center;
font-family: "Poppins", sans-serif;
font-size: 14px;
}

@media (min-width: 1024px) {
padding: 60px;
border-radius: 25px;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

> h2 {
display: flex;
align-items: center;
justify-items: center;
justify-content: center;
font-family: "Poppins", sans-serif;
font-weight: 500;
font-size: 35px;
line-height: 140%;
text-align: center;
}
}
`;
