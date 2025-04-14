import React from "react";
import { MapPin } from "lucide-react";
import { imgPool } from "../../../hotels-filter/components/PropertyCard";

const trendingDestination = [
  {
    name: "Paris",
    grid: "col-span-3",
    image: imgPool[0],
  },
  {
    name: "London",
    grid: "col-span-3",
    image: imgPool[1],
  },
  {
    name: "New york",
    grid: "row-start-2 col-span-2",
    image: imgPool[2],
  },
  {
    name: "Tokyo",
    grid: "row-start-2 col-span-2",
    image: imgPool[3],
  },
  {
    name: "Istanbul",
    grid: "row-start-2 col-span-2",
    image: imgPool[4],
  },
];

const TrendingDestinations = () => {
  return (
    <div className="text-black">
      <ul className="h-[500px] mt-5 grid max-sm:grid-cols-1 max-sm:grid-rows-5 grid-cols-6 grid-rows-2 gap-5">
        {trendingDestination.map((d, idx) => (
          <li
            key={d.name}
            className={`relative bg-yellow-200 rounded-lg overflow-hidden max-sm:col-span-1 max-sm:row-span-1 ${d.grid}`}
          >
            <img
              className="w-full object-cover h-full"
              src={d.image}
              alt="d.name"
            />
            {idx === 4 && (
              <div className="absolute inset-0 bg-black/50 underline text-white font-semibold flex justify-center items-center cursor-pointer">
                +20 photos
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingDestinations;
