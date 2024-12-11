import styled from "styled-components";
import { theme } from "../../core/theme";

export const Button = styled.button`
    position: relative;
    gap: 12px;
    height: 3rem;
    width: 10rem;
    overflow: hidden;
    border: 1px solid ${theme.palette.secondColor};
    color: ${theme.palette.secondColor};
    background-color: transparent;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: color 0.3s, box-shadow 0.3s;
    border-radius: 12px;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -50%;
        width: 200%;
        height: 0;
        background: ${theme.palette.secondColor};
        transform: translateY(-50%) rotate(45deg);
        transition: height 0.3s ease, transform 0.3s ease;
        z-index: 1;
    }

    &:hover {
        cursor: pointer;
        color: white;
        box-shadow: 0 4px 6px rgba(59, 130, 246, 0.5), 0 1px 3px rgba(59, 130, 246, 0.3); 
    }

    &:hover::before {
        height: 320%;
        transform: translateY(-50%) rotate(45deg);
        color: white;
    }
`;

export const ButtonContent = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;
    z-index: 2;
`;

export const Title = styled.h3`
    font-size: 64px;
    font-weight: inherit;
    color: ${theme.palette.fontColor};
    text-align: center;
`;