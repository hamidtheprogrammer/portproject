"use client";
import React, { useEffect } from "react";
import { LocationIcon2, StarIcon } from "@/app/svg";
import { Property } from "../../../hotels-filter";

const Title = ({ hotel }: { hotel: Property }) => {
  const roomSelectionSection = document.querySelector(`.room-selection`);

  useEffect(() => console.log(roomSelectionSection), [roomSelectionSection]);
  return (
    hotel && (
      <section className="flex justify-between max-sm:mt-10">
        <div>
          <div className="flex-col gap-1 ">
            <h1 className="font-bold text-2xl max-sm:text-xl">{hotel.name}</h1>
            <span className="flex">
              {Array.from({ length: hotel.rating }).map((s) => (
                <StarIcon height="15" width="15" />
              ))}
            </span>
          </div>
          <p className="flex gap-2 items-center text-sm text-black/60 mt-2">
            <LocationIcon2 height="20" width="20" color="text-blueish" /> Near
            {hotel.nearbyAttractions[0]}, {hotel.borough}, Lodon, LO1 2FH
          </p>
        </div>
        <div className="flex gap-3 items-center max-md:hidden">
          <h1 className="text-2xl font-medium tracking-tight">
            ${hotel.pricePerNight}
          </h1>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                (roomSelectionSection as HTMLDivElement).scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="hover:bg-blueish/90 bg-blueish rounded-md text-white h-14 flex justify-center items-center text-xs px-7"
          >
            Reserve this apartment
          </button>
        </div>
      </section>
    )
  );
};

export default Title;
