import styled, { css } from 'styled-components'
import { theme } from '../../core/theme';

export const Wrapper = styled.section`
    min-height: 100vh;
    overflow-x: hidden;
`;

export const Section = styled.div`
    margin: 0 auto;
    padding: 40px;
    display: grid;
    justify-content: center;
    gap: 80px;
    max-width: 1500px;
`;

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const SectionTitle = styled.h4<{ active?: boolean }>`
    background-image: linear-gradient(
        to right,
        ${theme.palette.secondColor},
        ${theme.palette.secondColor} 50%,
        ${theme.palette.fontColor} 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    font-size: 24px;
    font-weight: 200;
    padding: 8px 12px;

    &:before {
        content: '';
        background: ${theme.palette.secondColor};
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        transition: all 0.3s ease-in-out;
    }

    &:hover {
        background-position: 0;
    }

    &:hover:before {
        width: 100%;
    }

    ${({ active }) => active && css`
        background-position: 0;
        &:before {
            width: 100%;
        }

        &:hover:before {
            width: 100%;
        }
    `}
`;





export const ProjectCard = styled.div`
    display: flex;
    border-radius: 12px;
    color: ${theme.palette.fontColor};
    gap: 32px;
    max-width: 1200px;
`;

export const Content = styled.div`

`;

export const ProjectImage = styled.img`
    border-radius: 12px ;
    max-width: 500px;
    box-shadow: 0 0 60px 0px ${theme.palette.secondColor};
`;

export const TextWrapper = styled.div`
    padding: 20px;
    display: grid;
    justify-items: start;
`;

export const ProjectTitle = styled.span`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    margin: 0 ;
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const ProjectArticle = styled.p`
    font-size: 18px;
    font-weight: 200;
    color: ${theme.palette.fontColor};
    text-align: justify;
`;

export const StackWrapper = styled.div`
    display: flex; 
    justify-content: space-evenly;
`;

export const Stack = styled.span`
    font-size: 18px;
    color: ${theme.palette.fontColor};
    background: ${theme.palette.thirdColor};
    padding: 8px 12px;
    border-radius: 12px;
    box-shadow: 0 0 20px ${theme.palette.thirdColor};
`;
