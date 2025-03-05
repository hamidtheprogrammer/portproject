import React from "react";
import { hotels } from "../..";
import { LocationIcon2, StarIcon } from "@/app/svg";

const BestHotels = () => {
  return (
    <section className="py-10 lg:py-20 max-md:w-full w-[calc(100%-5rem)] max-sm:px-5 sm:px-[6rem] md:px-[6%] relative flex flex-col md:left-20 bg-white">
      <p className="text-blue-950 text-[0.65rem] tracking-[0.16rem]">
        SELECTED HOTELS
      </p>
      <h1 className="my-5 text-2xl text-blue-950 font-semibold">
        Our best hotels across different regions
      </h1>
      <ul className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-9 text-blue-950 gap-5">
        {hotels.map((hotel) => (
          <li
            key={hotel.name}
            className="md:max-w-80 max-md:w-full rounded-xl shadow-[0px_15px_20px_rgba(0,0,0,0.1)] px-4 py-5 flex flex-col gap-1"
          >
            <div className="h-52">
              <img
                src={hotel.image}
                className="h-full w-full object-cover rounded-xl"
                alt="hotel image"
              />
            </div>
            <span className="flex text-xs font-semibold gap-1 my-5 items-center">
              <StarIcon height="15" width="15" />
              <p className="translate-y-[0.1rem]">{hotel.rating}</p>
            </span>
            <h1 className="font-semibold">{hotel.name}</h1>
            <span className="flex gap-1 items-center mb-3 text-sm">
              <LocationIcon2 height="15" width="15" color="text-blue-950" />
              {hotel.country}
            </span>
            <p className="flex items-center gap-1 mb-3 font-semibold text-xs text-blue-950/50">
              From{" "}
              <strong className="text-blue-950 text-lg font-bold">
                ${hotel.startingPricePerNight}
              </strong>
              / per night
            </p>
            <button className="text-[0.65rem] tracking-[0.1rem] text-white flex justify-between items-center h-8 w-fit px-5 bg-blueish/90 rounded-md">
              Book Now
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BestHotels;
