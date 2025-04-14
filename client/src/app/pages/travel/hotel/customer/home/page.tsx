import React from "react";
import Hero from "./components/Hero";
import TravelInfo from "./components/TravelInfo";
import Advert from "./components/Advert";
import TrendingDestinations from "./components/TrendingDestinations";
import FeaturedProperties from "./components/FeaturedProperties";
import UK from "./components/UK";
import Subscribe from "./components/Subscribe";

const page = () => {
  return (
    <div className="text-white">
      <Hero />
      <TravelInfo />
      <Advert />
      <TrendingDestinations />
      <UK />
      <FeaturedProperties />
      <Subscribe />
    </div>
  );
};

export default page;
