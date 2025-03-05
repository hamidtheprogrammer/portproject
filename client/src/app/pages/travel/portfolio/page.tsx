"use client";
import React from "react";
import Hero from "./components/Hero";
import SelectedLocations from "./components/SelectedLocations";
import Discover from "./components/Discover";
import BestHotels from "./components/BestHotels";
import Client from "./components/Client";
import PopularLocations from "./components/PopularLocations";
import Footer from "./components/Footer";

const page = () => {
  return (
    <section
      id="landing_travel"
      className="fixed inset-0 z-[999] bg-white overflow-y-auto"
    >
      <Hero />
      <SelectedLocations />
      <Discover />
      <BestHotels />
      <Client />
      <PopularLocations />
      <Footer />
    </section>
  );
};

export default page;
