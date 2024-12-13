import { styled } from "styled-components";
import { theme } from "../../../core/theme";

export const PhoneNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;
    z-index: 10;
    
    @media (min-width: ${theme.breakPoints.mobileMd}px) {
        display: none;
    };
`;

export const MobileWrapper = styled.div`
    position: fixed;
    z-index: 8;
    width: 60%;
    top: 0;
    height: 100vh;
    backdrop-filter: blur(42px);
    background: rgba(0, 0, 0, 0.9);
    left: 0;
    padding: 52px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: ${theme.breakPoints.mobileMd}) {
        display: none;
    };
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const AuthWrapper = styled.div`
    display: grid;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;