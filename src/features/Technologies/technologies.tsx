import {
    Article,
    TechContainer,
    TechIcon,
    TechTitle,
    TechWrapper,
    Wrapper,
} from "./sTechnologies";
import {
    LinksWrapper,
    SectionTitle,
    Title,
} from "../../common/components/components";
import { useState } from "react";
import { skills, techLinks } from "../../core/arrays";

export const Technologies = () => {
    const [activeType, setActiveType] = useState("Frontend Technologies");

    const filteredSkills = skills.filter(
        (skills) => skills.type === activeType
    );
    return (
        <Wrapper>
            <Title>Technologies</Title>
            <Article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                iusto provident porro nam dolorum maiores similique deleniti,
                obcaecati voluptates assumenda modi aperiam, architecto
                distinctio tempore. Deserunt voluptatibus tenetur rem officiis.
            </Article>

            <TechContainer>
                <LinksWrapper>
                    {techLinks.map((link) => (
                        <SectionTitle
                            key={link.type}
                            active={activeType === link.type}
                            onClick={() => setActiveType(link.type)}
                        >
                            {link.title}
                        </SectionTitle>
                    ))}
                </LinksWrapper>
                <TechWrapper>
                    {filteredSkills.map((skill, index) => (
                        <TechIcon key={index}>
                            {skill.icon}
                            <span style={{ fontSize: "18px" }}>
                                {skill.text}
                            </span>
                        </TechIcon>
                    ))}
                </TechWrapper>
            </TechContainer>
        </Wrapper>
    );
};
