import styled from "styled-components";

export const Container = styled.button`
background: none;

color: ${({ theme }) => theme.COLORS.GRAY_200};
border: none;

display: flex;
align-items: center;
justify-items: center;
font-size: 20px;
gap: 5px;

@media (min-width: 1024px) {
font-weight: 700;
display: flex;
align-items: center;
justify-items: center;
font-size: 20px;
gap: 5px;
}
`;
