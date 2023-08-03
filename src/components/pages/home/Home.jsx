import React from "react";
import { Container } from "reactstrap";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import About from "../../sections/about/About";
import Skills from "../../sections/skills/Skills";
import HeroSection from "../../sections/herosection/HeroSection";
import Services from "../../sections/services/Services";
import Contact from "../../sections/contact/Contact";
import Portfolio from "../portfolio/Portfolio";
import Floatnav from "../../floatnav/Floatnav";

const Home = () => {
  return (
    <>
      <Header />
      <Floatnav />
      <Container>
        <HeroSection />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
