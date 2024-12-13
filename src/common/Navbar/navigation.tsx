import { Container, LanguagesWrapper, NavLink, Wrapper } from "./styledNavbar";
import { navLinks } from "../../core/arrays";
import { MobileMenu } from "./MobileMenu/mobileMenu";
import { FaComputerMouse } from "react-icons/fa6";

export const Navigation = () => {
    return (
        <Wrapper>
            <LanguagesWrapper></LanguagesWrapper>
            <Container>
                {navLinks.map((link) => (
                    <NavLink
                        smooth={true}
                        key={link.text}
                        to={link.to}
                        offset={-24}
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
