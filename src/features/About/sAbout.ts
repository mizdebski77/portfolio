import styled from 'styled-components'
import { theme } from '../../core/theme';

export const Wrapper = styled.div`
    min-height: 100vh;
    padding: 40px;
`;

export const Container = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`;

export const ImageWrapper = styled.div`
    border: 4px solid ${theme.palette.secondColor6};
    box-shadow: 0 0 400px 0 ${theme.palette.secondColor6};
    max-width: 500px;
    margin: auto;
    display: flex;
    justify-content: center;
    aspect-ratio: 1;
`;



export const Article = styled.article`
    max-width: 700px;
`;

export const ArticleTitle = styled.span`
    color: ${theme.palette.fontColor};
    font-size: 24px;
    font-weight: 300;
`;

export const ArticleText = styled.p`
    font-size: 18px;
    color: ${theme.palette.fontColor};
    font-weight: 200;
    text-align: justify;
    line-height: 24px;
`;

export const LangWrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 24px;
    justify-content: center;
    align-items: center;
`;

export const LangTitle = styled.p`
    color: ${theme.palette.fontColor};
    font-size: 24px;
    font-weight: 300;
    margin:  40px 0;
    text-align: center;
`;

export const LangImg = styled.img`
    max-width: 80px;
    margin: auto;
`;

export const Language = styled.div`
    display: grid;
    margin: auto;
`;

export const LangSpan = styled.span`
    font-size: 20px;
    font-weight: 300;
    color: ${theme.palette.fontColor};
`;
