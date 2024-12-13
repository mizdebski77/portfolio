"use client"; // Wymusza klientowe zachowanie komponentu

import React, { useState } from "react";
import { MobileWrapper, PhoneNavbar, Container } from "./styledMobileMenu";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../../../core/arrays";
import { NavLink } from "../styledNavbar";

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const animation = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                x: { velocity: 100 },
                duration: 0.3,
            },
        },
        hidden: {
            x: -250,
            opacity: 0,
            transition: {
                x: { velocity: 100 },
                duration: 0.3,
            },
        },
    };

    return (
        <>
            <PhoneNavbar onClick={toggleMenu}>
                <Hamburger color="#ffffff" size={24} toggled={isOpen} />
            </PhoneNavbar>
            <AnimatePresence>
                {isOpen && (
                    <MobileWrapper
                        as={motion.div}
                        initial="hidden"
                        animate={isOpen ? "visible" : "hidden"}
                        exit="hidden"
                        variants={animation}
                    >
                        <Container>
                            {navLinks.map((link) => (
                                <NavLink key={link.text} to={link.to}>
                                    {link.img}
                                    {link.text}
                                </NavLink>
                            ))}
                        </Container>
                    </MobileWrapper>
                )}
            </AnimatePresence>
        </>
    );
};
