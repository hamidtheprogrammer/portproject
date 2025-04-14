"use client";
import { MapPin } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

const ukCities = [
  {
    name: "London",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Manchester",
    image:
      "https://images.unsplash.com/photo-1619284518317-85b1ab8c7723?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Birmingham",
    image:
      "https://images.unsplash.com/photo-1589352511666-341e33517a0b?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Liverpool",
    image:
      "https://images.unsplash.com/photo-1578267764859-a6f4bfd2c683?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Edinburgh",
    image:
      "https://images.unsplash.com/photo-1594800083755-8fe31b2c99df?q=80&w=1281&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Glasgow",
    image:
      "https://images.unsplash.com/photo-1571930999432-f8121f1da5ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bristol",
    image:
      "https://images.unsplash.com/photo-1502732728614-8329a1bf1415?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const UK = () => {
  const router = useRouter();
  return (
    <div className="text-black mt-16">
      <h1 className="font-bold text-xl">Explore United Kingdom</h1>
      <ul className="flex gap-6 overflow-x-scroll mt-6 hamvilla_scroll">
        {ukCities.map((c) => (
          <li
            onClick={() =>
              router.push("/pages/travel/hotel/customer/hotels-filter")
            }
            key={c.name}
            className="space-y-2 cursor-pointer"
          >
            <img
              src={c.image}
              className="max-h-[10rem] min-w-[12rem] flex-shrink-0 flex-grow-0 aspect-square object-cover rounded-lg"
              alt={c.name}
            />
            <span className="flex gap-1 items-center">
              <MapPin className="opacity-30" />{" "}
              <h1 className="font-semibold text-sm">{c.name}</h1>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UK;
