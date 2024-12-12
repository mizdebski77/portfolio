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

export const ImgWrapper = styled.div`
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 60px 0px ${theme.palette.secondColor};
    cursor: pointer;
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 12px ;
    border: 2px solid ${theme.palette.secondColor};
    
    &:hover img {
        transform: scale(1.1);
    };

    &:hover span {
        opacity: 1;
    };
`;

export const ImgText = styled.span`
    transition: 0.3s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    z-index: 1;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    backdrop-filter: blur(2px);

    &:hover {
        opacity: 1;
    }
`;

export const ProjectImage = styled.img`
    opacity: 1;
    display: block;
    width: 100%;
    transition: 0.3s ease;
    object-fit: cover;
`;



export const Content = styled.div`

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
