"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";

const trendingDestination = [
  {
    name: "Paris",
    grid: "col-span-3",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "London",
    grid: "col-span-3",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "New york",
    grid: "row-start-2 col-span-2",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tokyo",
    grid: "row-start-2 col-span-2",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Istanbul",
    grid: "row-start-2 col-span-2",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const TrendingDestinations = () => {
  const router = useRouter();
  return (
    <div className="text-black">
      <h1 className="font-bold text-xl">TrendingDestinations</h1>
      <p className="text-sm text-black/70">
        "Explore this year’s top travel spots!"
      </p>
      <ul className="h-[500px] mt-5 grid max-sm:grid-cols-1 max-sm:grid-rows-5 grid-cols-6 grid-rows-2 gap-5">
        {trendingDestination.map((d) => (
          <li
            onClick={() =>
              router.push("/pages/travel/hotel/customer/hotels-filter")
            }
            key={d.name}
            className={`cursor-pointer relative bg-yellow-200 rounded-lg overflow-hidden max-sm:col-span-1 max-sm:row-span-1 ${d.grid}`}
          >
            <p className="flex gap-1 text-shadow top-[10%] left-6 font-bold text-xl z-[99] absolute text-white">
              <MapPin /> {d.name}
            </p>
            <img
              className="w-full object-cover h-full"
              src={d.image}
              alt="d.name"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingDestinations;
