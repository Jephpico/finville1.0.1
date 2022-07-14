import React from "react";
import HeroForm from "./HeroForm";
import Heroimage from "../../../assets/finville-hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text-box">
        <h1>
          A multifacet platform for financial market, fintech products and
          fintech services.
        </h1>
        <HeroForm />
      </div>
      <div className="hero-image-box">
        <img src={Heroimage} alt="An Illustration" />
      </div>
    </section>
  );
};

export default Hero;
