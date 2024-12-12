import styled from 'styled-components'
import { theme } from '../../core/theme';

export const Wrapper = styled.div`
    min-height: 100vh;
    padding: 40px;
`;

export const Container = styled.article`
    display: grid;
    grid-template-columns: 1fr 2fr;
`;

export const LangWrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 24px;
    justify-content: center;
    align-items: center;
`;

export const LangTitle = styled.span`
    color: ${theme.palette.fontColor};
    font-size: 24px;
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
