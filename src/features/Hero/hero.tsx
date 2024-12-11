import React from "react";
import { Role, Text, TextSection, Title, Wrapper } from "./styledHero";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
    return (
        <Wrapper>
            <TextSection>
                <Title>
                    <TypeAnimation
                        sequence={["Marcin Izdebski", 1000]}
                        speed={4}
                        cursor={false}
                        repeat={Infinity}
                    />
                </Title>
                <Role>Frontend / Mobile App developer</Role>
                <Text>
                    I'm an enthusiastic Frontend Developer with a strong passion
                    for new technologies and a deep commitment to learning
                    React. I am highly motivated and thrive on being a fast
                    learner. Currently, I am actively seeking new job
                    opportunities to further enhance my skills and contribute to
                    innovative projects.
                </Text>
            </TextSection>
        </Wrapper>
    );
};
