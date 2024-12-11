import styled from 'styled-components'
import { theme } from '../../core/theme';

export const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 40px;
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
    font-size: 24px;
    color: ${theme.color.fontColor};
    font-weight: 200;
    text-align: justify;
    margin: 0;
`;

export const Image = styled.img`
    
`;

export const Button = styled.button`

`;
