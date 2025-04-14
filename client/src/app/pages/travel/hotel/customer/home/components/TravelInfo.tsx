"use client";
import React from "react";
import Link from "next/link";
import { BedDoubleIcon, Calendar, User } from "lucide-react";

const TravelInfo = () => {
  return (
    <div className="bg-white mt-4 text-black rounded-lg overflow-hidden p-2 shadow-[0px_5px_10px_rgba(0,0,0,0.3)]">
      <div className="relative flex items-center">
        <BedDoubleIcon
          className="text-xs absolute opacity-30 w-4 aspect-square ml-3"
          size={28}
          color="black"
        />
        <input
          type="text"
          className="border-b-[1px] w-full h-12 md:text-xs pl-10 focus:outline-none"
          placeholder="Where are you going?"
        />
      </div>
      <div className="relative flex items-center">
        <Calendar
          className="text-xs absolute opacity-30 w-4 aspect-square ml-3"
          size={28}
          color="black"
        />
        <input
          type="text"
          className="border-b-[1px] w-full h-12 md:text-xs pl-10 focus:outline-none"
          placeholder="Check-in date - Check-out date"
        />
      </div>
      <div className="relative flex items-center">
        <User
          className="text-xs absolute opacity-30 w-4 aspect-square ml-3"
          size={28}
          color="black"
        />
        <input
          type="text"
          className="border-b-[1px] w-full h-12 md:text-xs pl-10 focus:outline-none"
          placeholder="2 adults 0 children 1 room"
        />
      </div>
      <Link href={"/pages/travel/hotel/customer/hotels-filter"}>
        <button className="bg-blueish rounded-lg mt-3 text-white  h-10 w-full flex justify-center items-center text-xs">
          Search
        </button>
      </Link>{" "}
    </div>
  );
};

export default TravelInfo;
