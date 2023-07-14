import React from "react";
// import Hero from "./Hero";
import Service from "./Service";
import Product from "./products";
import Reviews from "./reviews";
import Contact from "./contact";
import Banner from "./banner";
import BottomBanner from "./bottomBanner";
import WhyLove from "./WhyLove";
import About from "./About";

const Home = () => {
  return (
    <>
      <Banner />
      {/* <Hero /> */}
      <About/>
      <Service />
      <Product />
      <Reviews />
      <WhyLove/>
      <Contact />
      <BottomBanner/>
    </>
  );
};

export default Home;
