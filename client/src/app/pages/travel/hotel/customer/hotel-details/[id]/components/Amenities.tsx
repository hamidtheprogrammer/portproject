"use client";
import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const amenities = [
  "Pool",
  "Gym",
  "WiFi",
  "Parking",
  "Balcony",
  "Garden",
  "Security",
  "AC",
  "Laundry",
  "Playground",
];

const mid = Math.ceil(amenities.length / 2);
const firstRow = amenities.slice(0, mid);
const secondRow = amenities.slice(mid);

const Amenities = () => {
  return (
    <section className="flex gap-2 mt-4">
      <div className="relative flex flex-col justify-center items-center flex-1">
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
          className="rounded-lg object-cover min-w-full max-h-[6.5rem]"
          alt="picture"
        />
      </div>
      <div className="flex flex-col gap-2 max-md:hidden">
        {[firstRow, secondRow].map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((item, idx) => (
              <div
                key={item}
                className={`border border-gray-300 rounded-md h-12 flex-1 flex gap-2 items-center justify-center text-xs text-center
            ${idx % 2 === 0 ? "px-10" : "px-6"}`}
              >
                <Check size={18} className="text-green-500" /> {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
