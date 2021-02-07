import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import ContactUs from "../components/Contact";
// import { Spring } from "react-spring/renderprops";
import TestimonialCarusel from "../components/Testimonials/Testimonial";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <ContactUs />
      <TestimonialCarusel />
      <Footer />
    </>
  );
};

export default Home;
