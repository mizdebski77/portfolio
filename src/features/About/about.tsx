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
    Image,
} from "./sAbout";
import { Title } from "../../common/components/components";
import Slider from "react-infinite-logo-slider";
import { languages } from "../../core/arrays";
import me from "../../common/Images/profile.png";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <Wrapper id="about">
            <Title
                as={motion.h4}
                initial={{ y: "80px", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                About me
            </Title>
            <Container>
                <ImageWrapper
                    as={motion.div}
                    initial={{ x: "-80px", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    <Image src={me} alt="Me" />
                </ImageWrapper>

                <Article
                    as={motion.article}
                    initial={{ x: "80px", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
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
            <LangWrapper
                as={motion.div}
                initial={{ y: "80px", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                <LangTitle>Languages</LangTitle>
                <Slider
                    width="300px"
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
