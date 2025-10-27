import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import MenuSection from "./components/MenuSection";
import Specials from "./components/Specials";
import Highlights from "./components/Highlights";
import PrivateDining from "./components/PrivateDining";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <MenuSection />
        <Specials />
        <Highlights />
        <PrivateDining />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export default App;
