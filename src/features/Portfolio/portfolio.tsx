import {
    CustomSlide,
    CustomSwiper,
    ProjectArticle,
    ProjectCard,
    ProjectImage,
    ProjectTitle,
    Section,
    SectionTitle,
    TextWrapper,
    Wrapper,
} from "./styledPortfolio";
import { Title } from "../components/components";
import proj from "../../common/Images/proj.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export const Portfolio = () => {
    return (
        <Wrapper>
            <Title>Projects</Title>

            <Section>
                <SectionTitle>Web Applications</SectionTitle>

                <CustomSwiper
                    effect={"coverflow"}
                    centeredSlides={true}
                    slidesPerView={3}
                    modules={[EffectCoverflow, Pagination]}
                    spaceBetween={20}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                >
                    <CustomSlide>
                        <ProjectCard>
                            <ProjectImage src={proj} />
                            <TextWrapper>
                                <ProjectTitle>Tatry Razem</ProjectTitle>
                                <ProjectArticle>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolorum autem accusamus
                                    tempore aperiam harum pariatur quod! Culpa
                                    unde nostrum assumenda natus eligendi
                                    officiis in. Nostrum quidem aperiam omnis
                                    illum facere. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Dolorum autem
                                    accusamus tempore aperiam harum pariatur
                                    quod! Culpa unde nostrum assumenda natus
                                    eligendi officiis in. Nostrum quidem aperiam
                                    omnis illum facere.
                                </ProjectArticle>
                            </TextWrapper>
                        </ProjectCard>
                    </CustomSlide>

                    <CustomSlide>
                        <ProjectCard>
                            <ProjectImage src={proj} />
                            <TextWrapper>
                                <ProjectTitle>Tatry Razem</ProjectTitle>
                                <ProjectArticle>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolorum autem accusamus
                                    tempore aperiam harum pariatur quod! Culpa
                                    unde nostrum assumenda natus eligendi
                                    officiis in. Nostrum quidem aperiam omnis
                                    illum facere. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Dolorum autem
                                    accusamus tempore aperiam harum pariatur
                                    quod! Culpa unde nostrum assumenda natus
                                    eligendi officiis in. Nostrum quidem aperiam
                                    omnis illum facere.
                                </ProjectArticle>
                            </TextWrapper>
                        </ProjectCard>{" "}
                    </CustomSlide>
                    <CustomSlide>
                        <ProjectCard>
                            <ProjectImage src={proj} />
                            <TextWrapper>
                                <ProjectTitle>Tatry Razem</ProjectTitle>
                                <ProjectArticle>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolorum autem accusamus
                                    tempore aperiam harum pariatur quod! Culpa
                                    unde nostrum assumenda natus eligendi
                                    officiis in. Nostrum quidem aperiam omnis
                                    illum facere. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Dolorum autem
                                    accusamus tempore aperiam harum pariatur
                                    quod! Culpa unde nostrum assumenda natus
                                    eligendi officiis in. Nostrum quidem aperiam
                                    omnis illum facere.
                                </ProjectArticle>
                            </TextWrapper>
                        </ProjectCard>{" "}
                    </CustomSlide>
                    <CustomSlide>
                        <ProjectCard>
                            <ProjectImage src={proj} />
                            <TextWrapper>
                                <ProjectTitle>Tatry Razem</ProjectTitle>
                                <ProjectArticle>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolorum autem accusamus
                                    tempore aperiam harum pariatur quod! Culpa
                                    unde nostrum assumenda natus eligendi
                                    officiis in. Nostrum quidem aperiam omnis
                                    illum facere. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Dolorum autem
                                    accusamus tempore aperiam harum pariatur
                                    quod! Culpa unde nostrum assumenda natus
                                    eligendi officiis in. Nostrum quidem aperiam
                                    omnis illum facere.
                                </ProjectArticle>
                            </TextWrapper>
                        </ProjectCard>{" "}
                    </CustomSlide>
                </CustomSwiper>
            </Section>
        </Wrapper>
    );
};
