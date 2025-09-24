import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Portfolio3D from "./Portfolio3D";
import PortfolioDev from "./PortfolioDev";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <About />
        <Portfolio3D />
        <PortfolioDev />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}
