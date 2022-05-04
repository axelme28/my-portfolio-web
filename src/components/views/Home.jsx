import React from "react";

import { Projects } from "../ui/projects";
import { Footer } from "../ui/Footer";
import { Skills } from "../ui/Skills";
import { Header } from "../ui/Header";
import { AboutMe } from "../ui/AbautMe";

export const Home = () => {
    return (
        <>
            <Header />

            <AboutMe />

            <Skills />

            <Projects />

            <Footer />
        </>
    );
};
