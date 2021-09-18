import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import About from "./components/About";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import HeroPage from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import { mainTheme } from "./constants/cssThemes";
import Header from "./components/Header";
import Thesis from "./components/Thesis";
import Skills from "./components/Skills";

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  }, [hash, pathname]); // do this on route change

  return (
    <ThemeProvider theme={mainTheme}>
      <Container>
        <Header />
        <section id="hero">
          <HeroPage />
        </section>
        <section style={{ scrollMarginTop: "100px" }} id="services">
          <Services />
        </section>

        <section style={{ scrollMarginTop: "100px" }} id="projects">
          <Projects />
        </section>

        <section style={{ scrollMarginTop: "100px" }} id="skills">
          <Skills />
        </section>

        <section style={{ scrollMarginTop: "100px" }} id="thesis">
          <Thesis />
        </section>

        <section style={{ scrollMarginTop: "100px" }} id="about-me">
          <About />
        </section>

        <section id="contact-info">
          <ContactInfo />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </Container>
    </ThemeProvider>
  );
}
const Container = styled.div`
  font-family: ${(props) => props.theme.font};
  scroll-behavior: smooth;

  background-color black;
  background-image linear-gradient(315deg, #485563 0%, #000000 90%);
`;

export default App;
