import styled from 'styled-components'
import { theme } from '../../core/theme';

export const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    max-width: 1920px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 80px;
`;

export const TextSection = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 32px;
`;

export const Title = styled.h1`
    font-size: 96px;
    font-weight: normal;
    color: ${theme.color.fontColor};
    font-weight: 100;
    text-align: center;
    width: 600px;
    margin: 0;
`;

export const Role = styled.h2`
    font-size: 32px;
    font-weight: 300;
    background: linear-gradient(to right, #195a58 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
`;

export const Text = styled.p`
    font-size: 20px;
    color: ${theme.color.fontColor};
    font-weight: 200;
    text-align: justify;
    margin: 0;
    letter-spacing: 2px;
`;

export const ContactIconsWrapper = styled.div`
    
`;

export const ImageWrapper = styled.div`
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: end;
    border-radius: 100%;
    overflow: hidden;
    max-width: 560px;
    padding: 40px;
    width: 100%;
    aspect-ratio: 1;
    position: relative;
`;

export const Image = styled.img`
    margin: 0 auto;
    max-width: 520px;
    width: 100%;
    position: absolute;
    bottom: 0px;
`;

export const Button = styled.button`

`;
