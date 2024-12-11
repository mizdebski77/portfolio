import React from "react";
import { TextSection, Title, Wrapper } from "./styledHero";
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
            </TextSection>
        </Wrapper>
    );
};
