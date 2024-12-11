import styled from 'styled-components'
import { theme } from '../../core/theme';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrapper = styled.section`
    min-height: 100vh;
    overflow-x: hidden;
`;

export const Section = styled.div`
    margin: 0 auto;
    padding: 40px;
`;

export const SectionTitle = styled.h4`
    color: ${theme.palette.fontColor};
    font-size: 28px;
    font-weight: 100;
    margin:0;
`;
export const CustomSwiper = styled(Swiper)`
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  height: auto;

`;

export const CustomSlide = styled(SwiperSlide)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 80px 0;
    height: 800px;
`;

export const ProjectCard = styled.div`
    border: 1px solid ${theme.palette.secondColor};
    border-radius: 12px;
    color: ${theme.palette.fontColor};
    max-width: 480px;
    background: ${theme.palette.secondColor2};
    box-shadow: 0 0 100px 0px ${theme.palette.secondColor};
`;

export const ProjectImage = styled.img`
    border-radius: 12px 12px 0 0;
    max-width: inherit
`;

export const TextWrapper = styled.div`
    padding: 20px;
`;

export const ProjectTitle = styled.p`
    font-size: 28px;
    font-weight: 300;
    text-align: center;
    margin: 0 ;
`;

export const ProjectArticle = styled.p`
    font-size: 20px;
    font-weight: 200;
    color: ${theme.palette.fontColor};
    text-align: justify;
`;
