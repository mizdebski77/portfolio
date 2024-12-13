import { useState } from "react";
import {
    ImgText,
    ImgWrapper,
    ProjectArticle,
    ProjectCard,
    ProjectImage,
    ProjectLink,
    Section,
    Stack,
    StackWrapper,
    TextWrapper,
    TitleContainer,
    Wrapper,
} from "./sPortfolio";
import {
    LinksWrapper,
    SectionTitle,
    Title,
} from "../../common/components/components";
import { Images } from "lucide-react";
import { Fullscreen } from "./FullScreeen/fullscreen";
import { projects, projectsLinks } from "../../core/arrays";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export const Portfolio = () => {
    const [activeType, setActiveType] = useState("Web Applications");
    const [fullScreen, setFullScreen] = useState(false);

    const filteredProjects = projects.filter(
        (project) => project.type === activeType
    );

    return (
        <Wrapper id="portfolio">
            <Title>Projects</Title>
            <Section>
                <LinksWrapper>
                    {projectsLinks.map((link) => (
                        <SectionTitle
                            key={link.type}
                            active={activeType === link.type}
                            onClick={() => setActiveType(link.type)}
                        >
                            {link.title}
                        </SectionTitle>
                    ))}
                </LinksWrapper>
                {fullScreen && <Fullscreen setFullScreen={setFullScreen} />}

                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        as={motion.div}
                        initial={{
                            x: index % 2 === 0 ? "30%" : "-30%",
                            opacity: 0,
                        }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        key={project.id}
                    >
                        <div onClick={() => setFullScreen(true)}>
                            <ImgWrapper as={motion.div}>
                                <ImgText>
                                    <Images />
                                    View Gallery
                                </ImgText>
                                <ProjectImage
                                    onClick={() => setFullScreen(true)}
                                    src={project.image}
                                />
                            </ImgWrapper>{" "}
                        </div>

                        <div>
                            <TextWrapper>
                                <TitleContainer>
                                    <ProjectLink
                                        href={project.liveUrl}
                                        target="_blank"
                                    >
                                        {project.name}
                                        <FaExternalLinkAlt />
                                    </ProjectLink>

                                    {project.codeUrl && (
                                        <ProjectLink
                                            href={project.codeUrl}
                                            target="_blank"
                                            style={{ fontWeight: "200" }}
                                        >
                                            <FaGithub />
                                            GitHub
                                        </ProjectLink>
                                    )}
                                </TitleContainer>

                                <ProjectArticle>
                                    {project.description}
                                </ProjectArticle>
                            </TextWrapper>

                            <StackWrapper>
                                {project.tags.map((tech, index) => (
                                    <Stack key={index}>{tech}</Stack>
                                ))}
                            </StackWrapper>
                        </div>
                    </ProjectCard>
                ))}
            </Section>
        </Wrapper>
    );
};
