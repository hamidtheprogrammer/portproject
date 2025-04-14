"use client";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
      <div className="max-w-[600px] max-sm:text-center py-4 max-md:max-w-[450px]">
        <h1 className="text-5xl font-bold mb-3 max-md:text-4xl max-sm:text-2xl">
          Find your perfect stay for your next journey
        </h1>
        <p className="text-xl max-md:text-lg max-sm:text-sm">
          Explore stunning villas, cozy cabins, charming houses, & more
        </p>
        <Link href={"/pages/travel/hotel/customer/hotels-filter"}>
          <button className="mt-8 bg-blueish text-white rounded-md h-10 px-4 text-xs">
            Find yours
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
