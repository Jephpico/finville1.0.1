import React from "react";
import Hero from "./Hero";
import BeginnersLanding from "./BeginnersLanding";
import BlogHome from "./BlogHome";
import ServicesHome from "./ServicesHome";

const Home = () => {
  return (
    <main>
      <Hero />
      <BeginnersLanding />
      <BlogHome />
      <ServicesHome />
    </main>
  );
};

export default Home;
