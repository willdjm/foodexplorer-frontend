import styled from "styled-components";

export const Container = styled.div`
max-width: 335px;
height: 550px;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};

border-radius: 7px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

position: relative;

svg {
cursor: pointer;
}

> svg {
color: ${({ theme }) => theme.COLORS.GRAY_200};

position: absolute;
top: 10px;
right: 10px;
}

> img {
max-width: 140px;
margin-top: ${({ isAdmin }) => isAdmin ? "50px" : "none"};

cursor: pointer;
}

> span {
line-height: 100%;
color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};

margin-bottom: ${({ isAdmin }) => isAdmin ? "50px" : "none"};
}

@media (min-width: 1024px) {
max-width: 480px;
height: 735px;

gap: 20px;

> svg {
right: 5px;
}

> img {
max-width: 180px;
margin-top: ${({ isAdmin }) => isAdmin ? "50px" : "none"};
}

> p {
font-size: 16px;
line-height: 160%;
text-align: center;

color: ${({ theme }) => theme.COLORS.GRAY_100};
overflow: hidden;
}

> span {
font-size: 30px;
line-height: 160%;

margin-bottom: ${({ isAdmin }) => isAdmin ? "50px" : "none"};
}
}
`;

export const Title = styled.div`
width: 100%;

display: flex;
align-items: center;
color: ${({ theme }) => theme.COLORS.GRAY_200};

> h2 {
font-family: "Poppins", sans-serif;
font-weight: 500;
font-size: 16px;
text-align: center;
width: 100%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

@media (min-width: 1024px) {
> h2 {
font-weight: 700;
font-size: 20px;
line-height: 140%;
}
}
`;

export const Order = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

@media (min-width: 1024px) {
width: fit-content;
flex-direction: row;
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
