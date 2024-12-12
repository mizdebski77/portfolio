import React from "react";
import {
    LangWrapper,
    Wrapper,
    Language,
    LangSpan,
    LangImg,
    LangTitle,
} from "./sAbout";
import { SectionTitle, Title } from "../../common/components/components";
import Slider from "react-infinite-logo-slider";
import { languages } from "../../core/arrays";

export const About = () => {
    return (
        <Wrapper>
            <Title>About me</Title>
            <LangWrapper>
                <SectionTitle>Languagaes</SectionTitle>
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
