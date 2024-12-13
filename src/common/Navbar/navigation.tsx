import {
    Container,
    LanguageContainer,
    LanguageIcon,
    LanguagesWrapper,
    NavLink,
    Wrapper,
} from "./styledNavbar";
import { languages, navLinks } from "../../core/arrays";
import { MobileMenu } from "./MobileMenu/mobileMenu";

export const Navigation = () => {
    return (
        <Wrapper>
            <LanguagesWrapper>
                {languages.map((language) => (
                    <LanguageContainer>
                        <LanguageIcon src={language.icon} alt="Icon" />
                    </LanguageContainer>
                ))}
            </LanguagesWrapper>
            <Container>
                {navLinks.map((link) => (
                    <NavLink
                        smooth={true}
                        key={link.text}
                        to={link.to}
            
                        spy={true}
                    >
                        {link.img}

                        {link.text}
                    </NavLink>
                ))}
            </Container>

            <MobileMenu />
        </Wrapper>
    );
};
