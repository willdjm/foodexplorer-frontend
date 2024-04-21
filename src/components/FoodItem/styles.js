import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;

background-color: ${({ theme, isNew }) =>
isNew ? "transparent" : theme.COLORS.GRAY_400};
outline: ${({ theme, isNew }) =>
isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

border-radius: 7px;
padding-right: 10px;

> button {
border: none;
background: none;
display: flex;
align-items: center;

color: ${({ theme, isNew }) =>
isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
}

> input {
height: 25px;
width: 100%;
padding: 20px;
border: none;
outline: none;

color: ${({ theme }) => theme.COLORS.WHITE};
background: transparent;

&::placeholder {
color: ${({ theme }) => theme.COLORS.GRAY_300};
}
}
`;