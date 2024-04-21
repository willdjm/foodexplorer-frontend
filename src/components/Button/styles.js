import styled from "styled-components";

export const Container = styled.button`
width: 100%;

background-color: ${({ theme }) => theme.COLORS.DARK_RED};
color: ${({ theme }) => theme.COLORS.WHITE};

font-family: 'Poppins', sans-serif;
font-size: 14px;
height: 56px;
border: 0;
padding: 0 16px;
border-radius: 7px;
font-weight: 500;
align-items: center;
justify-items: center;

&:disabled {
opacity: 0.5;
}

@media (min-width: 1024px) {
padding: 18px 50px;
}
`;