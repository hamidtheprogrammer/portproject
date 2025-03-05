import React from "react";
import { popularLocations } from "../..";
import { LocationIcon2 } from "@/app/svg";

const PopularLocations = () => {
  return (
    <section className="py-28 lg:py-32 max-md:w-full w-[calc(100%-5rem)] max-sm:px-5 sm:px-[6rem] md:px-[6%] relative flex flex-col md:left-20">
      <div className="flex flex-col gap-5 mb-12">
        <p className="text-blue-950 text-[0.65rem] tracking-[0.16rem]">
          Explore Our Most Loved Destinations
        </p>
        <h1 className="text-blue-950 text-xl font-semibold max-w-[38rem]">
          From vibrant cities to serene beaches, discover the top places our
          travelers can't get enough of.
        </h1>
      </div>
      <ul className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-9 gap-5">
        {popularLocations.map((loc) => (
          <li
            className="relative h-[15rem] rounded-xl overflow-hidden group"
            key={loc.name}
          >
            <div className="absolute z-[9] bg-black/10 inset-0"></div>
            <div className="absolute group-hover:scale-110 transition-all duration-500 inset-0">
              <img
                src={loc.image}
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="relative h-full w-full flex gap-2 items-end z-[99] pb-5 pl-5">
              <LocationIcon2
                height="20"
                width="20"
                strokeWidth={2}
                color="text-white"
              />
              <p className="relative text-white hover:underline cursor-pointer font-medium">
                {loc.name}
              </p>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PopularLocations;
