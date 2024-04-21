import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
justify-items: center;
flex-grow: 1;
align-items: center;
border-radius: 7px;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

input {
height: 56px;
padding: 12px;
background: transparent;
border: 0;

&:placeholder{
color: ${({ theme }) => theme.COLORS.GRAY_100};
border: none;
outline: none;
border-radius: 10px;
}
}
`;