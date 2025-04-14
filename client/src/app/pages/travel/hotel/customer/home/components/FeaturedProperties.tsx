"use client";
import React, { useState } from "react";
import { hotels } from "../../../..";
import { LocationIcon2, StarIcon } from "@/app/svg";
import HotelList from "./HotelList";
const destinations = [
  "bangkok",
  "paris",
  "shanghai",
  "istanbul",
  "tokyo",
  "beijing",
  "amsterdam",
];

const FeaturedProperties = () => {
  const [currentTab, setCurrentTab] = useState<string>(destinations[0]);
  return (
    <div className="text-black my-16 space-y-2">
      <h1 className="font-bold text-xl">Featured Properties</h1>
      <ul className="flex gap-4 w-full overflow-x-auto hamvilla_f_scroll">
        {destinations.map((d) => (
          <li
            onClick={() => {
              setCurrentTab(d);
            }}
            key={d}
            className={`rounded-md shadow-[0px_2px_10px_rgba(0,0,0,0.08)] cursor-pointer px-3 h-8 flex items-center text-xs ${
              d === currentTab
                ? "bg-blueish hover:bg-blueish/50 text-white"
                : "bg-white hover:bg-black/10 text-black"
            }`}
          >
            {d}
          </li>
        ))}
      </ul>
      <HotelList hotels={hotels} />
    </div>
  );
};

export default FeaturedProperties;
