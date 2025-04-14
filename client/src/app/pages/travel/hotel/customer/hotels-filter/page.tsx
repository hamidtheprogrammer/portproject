"use client";
import React from "react";
import TravelInfo from "../home/components/TravelInfo";
import BackTracking from "./components/BackTracking";
import Filter from "./components/Filter";
import PropertyList from "./components/PropertyList";
import HotelsProvider from "./context/HotelsProvider";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-white">Hotels</h1>
      <TravelInfo />
      <BackTracking />
      <HotelsProvider>
        <div className="flex gap-4">
          <div className="self-start space-y-5 sticky top-1 flex-1 max-w-[15rem] max-lg:hidden max-h-screen overflow-y-auto filter_scroll">
            <div className="relative flex flex-col justify-center items-center">
              <Link
                className="absolute"
                href={"/pages/travel/hotel/customer/hotels-map-view"}
              >
                <button className="bg-blueish hover:bg-blueish/90 rounded-lg text-white h-10 flex items-center justify-center px-3 text-xs">
                  view on map
                </button>
              </Link>
              <img
                src="/travel/map.jpg"
                className="rounded-lg object-cover"
                alt="picture"
              />
            </div>
            <Filter />
          </div>
          <PropertyList />
        </div>
      </HotelsProvider>
    </div>
  );
};

export default page;
