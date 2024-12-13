import {
    ButtonsWrapper,
    ContactIconsWrapper,
    Image,
    ImageWrapper,
    SocialLink,
    Role,
    Text,
    TextSection,
    Title,
    Wrapper,
} from "./sHero";
import { TypeAnimation } from "react-type-animation";
import profile from "../../common/Images/profile.png";
import { motion } from "framer-motion";
import { heroButtons, socialLinks } from "../../core/arrays";
import { ButtonContent, Button } from "../../common/components/components";
import VantaEffect from "../../core/vanta";
import { Link } from "react-scroll";

export const Hero = () => {
    return (
        <>
            <VantaEffect />

            <Wrapper id="home">
                <TextSection>
                    <Title>
                        <TypeAnimation
                            sequence={["Marcin Izdebski", 1000]}
                            speed={4}
                            cursor={false}
                            repeat={Infinity}
                        />
                    </Title>
                    <Role
                        as={motion.h2}
                        initial={{ x: "-30%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                    >
                        Frontend / Mobile App developer
                    </Role>
                    <Text
                        as={motion.p}
                        initial={{ y: "30%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                    >
                        I'm an enthusiastic Frontend Developer with a strong
                        passion for new technologies and a deep commitment to
                        learning React. I am highly motivated and thrive on
                        being a fast learner. Currently, I am actively seeking
                        new job opportunities to further enhance my skills and
                        contribute to innovative projects.
                    </Text>

                    <ContactIconsWrapper>
                        {socialLinks.map((link, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: "-100vh" }}
                                animate={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1,
                                    delay: index * 0.2,
                                    type: "spring",
                                    bounce: 0.4,
                                }}
                                key={link.name}
                            >
                                <SocialLink
                                    style={{
                                        filter: `drop-shadow(0px 0px 8px ${link.bg})`,
                                    }}
                                    href={link.href}
                                    target="_blank"
                                    url={link.href}
                                    bgColor={link.bg}
                                />
                            </motion.div>
                        ))}
                    </ContactIconsWrapper>

                    <ButtonsWrapper>
                        {heroButtons.map((button, index) => (
                            <Link
                                key={button.name}
                                to={button.to}
                                smooth={true}
                            >
                                <Button
                                    as={motion.button}
                                    initial={{ y: "100vh" }}
                                    animate={{ y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 1,
                                        delay: index * 0.2,
                                    }}
                                >
                                    <ButtonContent>
                                        <button.icon />
                                        <span>{button.name}</span>
                                    </ButtonContent>
                                </Button>
                            </Link>
                        ))}
                    </ButtonsWrapper>
                </TextSection>

                <ImageWrapper
                    as={motion.div}
                    initial={{ x: "30%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    <Image src={profile} alt="Profile" />
                </ImageWrapper>
            </Wrapper>
        </>
    );
};
