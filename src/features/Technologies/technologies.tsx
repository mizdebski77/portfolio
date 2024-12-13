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
import { motion } from "framer-motion";

export const Technologies = () => {
    const [activeType, setActiveType] = useState("Frontend");

    const filteredSkills = skills.filter(
        (skills) => skills.type === activeType
    );
    return (
        <Wrapper id="skills">
            <Title
                as={motion.h4}
                initial={{ y: "80px", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                Technologies
            </Title>
            <Article
                as={motion.p}
                initial={{ x: "80px", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                iusto provident porro nam dolorum maiores similique deleniti,
                obcaecati voluptates assumenda modi aperiam, architecto
                distinctio tempore. Deserunt voluptatibus tenetur rem officiis.
            </Article>

            <TechContainer>
                <LinksWrapper
                    as={motion.div}
                    initial={{ x: "-80px", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
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
                <TechWrapper
                    as={motion.div}
                    initial={{ y: "80px", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    {filteredSkills.map((skill, index) => (
                        <TechIcon
                            key={index}
                            style={{
                                color: `${skill.color}`,
                                boxShadow: `0 0 20px 0 ${skill.color}`,
                                border: `4px solid ${skill.color}`,
                            }}
                        >
                            {skill.icon}
                            <span
                                style={{
                                    fontSize: "16px",
                                    color: `${skill.color}`,
                                }}
                            >
                                {skill.text}
                            </span>
                        </TechIcon>
                    ))}
                </TechWrapper>
            </TechContainer>
        </Wrapper>
    );
};
