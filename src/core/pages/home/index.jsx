import React from "react";
// import Hero from "./Hero";
import Service from "./Service";
import Product from "./products";
import Reviews from "./reviews";
import Contact from "./contact";
import Banner from "./banner";

const Home = () => {
  return (
    <>
      <Banner />
      {/* <Hero /> */}
      <Service />
      <Product />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;
