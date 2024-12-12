import { useState } from "react";
import {
    ImgText,
    ImgWrapper,
    LinksWrapper,
    ProjectArticle,
    ProjectCard,
    ProjectImage,
    ProjectTitle,
    ProjectTitleWrapper,
    Section,
    SectionTitle,
    Stack,
    StackWrapper,
    TextWrapper,
    TitleContainer,
    Wrapper,
} from "./sPortfolio";
import { Title } from "../components/components";
import proj from "../../common/Images/proj.png";
import { ExternalLink, Github, Images } from "lucide-react";
import { Fullscreen } from "./FullScreeen/fullscreen";
import { projectsLinks } from "../../core/arrays";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../../common/Portfolio/portfolio";

export const Portfolio = () => {
    const [activeType, setActiveType] = useState("Web Applications");
    const [fullScreen, setFullScreen] = useState(false);

    // const projects = [
    //     {
    //         id: 1,
    //         type: "Web Applications",
    //         title: "Trek Shop",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum perferendis vero ad eius deleniti. Iste quibusdam necessitatibus accusamus reprehenderit fugit rerum fuga eos magni repellendus, velit placeat esse harum sit?",
    //         technologies: ["React", "Redux", "Tailwind css"],
    //         image: proj,
    //     },
    //     {
    //         id: 2,
    //         type: "Mobile Applications",
    //         title: "Mobile App",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum perferendis vero ad eius deleniti. Iste quibusdam necessitatibus accusamus reprehenderit fugit rerum fuga eos magni repellendus, velit placeat esse harum sit?",
    //         technologies: ["React Native", "Redux"],
    //         image: proj,
    //     },
    //     {
    //         id: 3,
    //         type: "Landing Pages",
    //         title: "Landing Page",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum perferendis vero ad eius deleniti. Iste quibusdam necessitatibus accusamus reprehenderit fugit rerum fuga eos magni repellendus, velit placeat esse harum sit?",
    //         technologies: ["HTML", "CSS", "JavaScript"],
    //         image: proj,
    //     },
    // ];

    const filteredProjects = projects.filter(
        (project) => project.type === activeType
    );

    return (
        <Wrapper>
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

                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id}>
                        <div onClick={() => setFullScreen(true)}>
                            <ImgWrapper>
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
                                    <ProjectTitleWrapper>
                                        <ProjectTitle href="localhost:5173">
                                            {project.name}
                                        </ProjectTitle>
                                        <FaExternalLinkAlt />
                                    </ProjectTitleWrapper>
                                    <ProjectTitleWrapper>
                                        <FaGithub />
                                        <ProjectTitle
                                            style={{ fontWeight: "200" }}
                                            href="localhost:5173"
                                        >
                                            GitHub
                                        </ProjectTitle>
                                    </ProjectTitleWrapper>
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
