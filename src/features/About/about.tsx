import React from "react";
import {
    LangWrapper,
    Wrapper,
    Language,
    LangSpan,
    LangImg,
    LangTitle,
    Container,
    ImageWrapper,
    Article,
    ArticleTitle,
    ArticleText,
} from "./sAbout";
import { Title } from "../../common/components/components";
import Slider from "react-infinite-logo-slider";
import { languages } from "../../core/arrays";
import me from "../../common/Images/profile.png";

export const About = () => {
    return (
        <Wrapper>
            <Title>About me</Title>
            <Container>
                <ImageWrapper>
                    <img src={me} alt="Me" />
                </ImageWrapper>

                <Article>
                    <ArticleTitle>About me:</ArticleTitle>
                    <ArticleText>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Beatae quibusdam sunt voluptatem deleniti ad
                        nesciunt eos earum totam debitis reiciendis! Repellendus
                        ipsa soluta quod rerum ullam. Illum tenetur eius nemo?
                    </ArticleText>

                    <ArticleTitle>Education</ArticleTitle>
                    <ArticleText>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Beatae quibusdam sunt voluptatem deleniti ad
                        nesciunt eos earum totam debitis reiciendis! Repellendus
                        ipsa soluta quod rerum ullam. Illum tenetur eius nemo?
                    </ArticleText>

                    <ArticleTitle>Courses</ArticleTitle>
                    <ArticleText>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Beatae quibusdam sunt voluptatem deleniti ad
                        nesciunt eos earum totam debitis reiciendis! Repellendus
                        ipsa soluta quod rerum ullam. Illum tenetur eius nemo?
                    </ArticleText>
                </Article>
            </Container>
            <LangWrapper>
                <LangTitle>Languages</LangTitle>
                <Slider
                    width="400px"
                    duration={15}
                    pauseOnHover={true}
                    blurBorders={false}
                >
                    {languages.map((language) => (
                        <Language key={language.id}>
                            <LangImg src={language.icon} alt="any" />
                            <LangSpan>
                                {language.name} - {language.level}
                            </LangSpan>
                        </Language>
                    ))}
                </Slider>
            </LangWrapper>
        </Wrapper>
    );
};
