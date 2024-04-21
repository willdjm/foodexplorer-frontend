import styled from "styled-components";

export const Container = styled.header`
display: flex;
align-items: center;

grid-area: header;
height: 80px;
width: 100%;
padding: 10px 20px 0;
display: flex;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

button:last-child {
display: flex;
align-items: center;
justify-content: center;
justify-items: center;
width: auto;
padding: 0;
background: none;
}

@media (min-width: 1024px) {
display: flex;
align-items: center;
justify-items: center;
justify-content: center;
height: 90px;
padding: 0 250px;
justify-content: space-between;
gap: 20px;

.new, .orders {
display: flex;
align-items: center;
justify-content: center;
justify-items: center;
max-width: 200px;
gap: 3px;
}
}
`;

export const Menu = styled.button`
border: none;
background: none;
display: flex;
align-items: center;
gap: 10px;

color: ${({ theme }) => theme.COLORS.WHITE};

span {
font-size: 16px
}
`;

export const Brand = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;

> a {
img {
width: 200px
}
}

@media (min-width: 1024px) {
width: auto;
> img {
width: 200px;
}
}
`;

export const Logout = styled.button`
border: none;
background: none;
display: flex;
align-items: center;
color: ${({ theme }) => theme.COLORS.WHITE};
`;