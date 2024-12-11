import React, { useState } from "react";
import {
    Content,
    LinksWrapper,
    ProjectArticle,
    ProjectCard,
    ProjectImage,
    ProjectTitle,
    Section,
    SectionTitle,
    Stack,
    StackWrapper,

    TextWrapper,
    Wrapper,
} from "./styledPortfolio";
import { Title } from "../components/components";
import proj from "../../common/Images/proj.png";
import { ExternalLink } from "lucide-react";

export const Portfolio = () => {
    const [activeType, setActiveType] = useState("Web Applications");

    const projects = [
        {
            id: 1,
            type: "Web Applications",
            title: "Trek Shop",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum perferendis vero ad eius deleniti. Iste quibusdam necessitatibus accusamus reprehenderit fugit rerum fuga eos magni repellendus, velit placeat esse harum sit?",
            technologies: ["React", "Redux", "Tailwind css"],
            image: proj,
        },
        {
            id: 2,
            type: "Mobile Applications",
            title: "Mobile App",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum perferendis vero ad eius deleniti. Iste quibusdam necessitatibus accusamus reprehenderit fugit rerum fuga eos magni repellendus, velit placeat esse harum sit?",
            technologies: ["React Native", "Redux"],
            image: proj,
        },
        {
            id: 3,
            type: "Landing Pages",
            title: "Landing Page",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum perferendis vero ad eius deleniti. Iste quibusdam necessitatibus accusamus reprehenderit fugit rerum fuga eos magni repellendus, velit placeat esse harum sit?",
            technologies: ["HTML", "CSS", "JavaScript"],
            image: proj,
        },
    ];

    const filteredProjects = projects.filter(
        (project) => project.type === activeType
    );

    return (
        <Wrapper>
            <Title>Projects</Title>

            <Section>
                <LinksWrapper>
                    <SectionTitle
                        active={activeType === "Web Applications"}
                        onClick={() => setActiveType("Web Applications")}
                    >
                        Web Applications
                    </SectionTitle>
                    <SectionTitle
                        active={activeType === "Mobile Applications"}
                        onClick={() => setActiveType("Mobile Applications")}
                    >
                        Mobile Applications
                    </SectionTitle>
                    <SectionTitle
                        active={activeType === "Landing Pages"}
                        onClick={() => setActiveType("Landing Pages")}
                    >
                        Landing Pages
                    </SectionTitle>
                </LinksWrapper>

                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id}>
                        <ProjectImage src={project.image} />
                        <Content>
                            <TextWrapper>
                                <ProjectTitle>
                                    {project.title}
                                    <ExternalLink />
                                </ProjectTitle>
                                <ProjectArticle>{project.description}</ProjectArticle>
                            </TextWrapper>
                            <StackWrapper>
                                {project.technologies.map((tech, index) => (
                                    <Stack key={index}>{tech}</Stack>
                                ))}
                            </StackWrapper>
                        </Content>
                    </ProjectCard>
                ))}
            </Section>
        </Wrapper>
    );
};
