"use client";
import React, { useState } from "react";
import { useContext } from "react";
import { HotelsContext } from "../context/HotelsProvider";
import { Filter, Map } from "lucide-react";
import Link from "next/link";
import { BiSort } from "react-icons/bi";
import MobileFilter from "./MobileFilter";
import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  const { hotels, isFilterOpen, setIsFilterOpen } = useContext(HotelsContext);
  return (
    <div className="flex-1 text-black">
      <div
        className={`${
          !isFilterOpen && "h-0"
        } fixed overflow-y-auto transition-all duration-500 inset-0 bg-white z-[99]`}
      >
        <p
          onClick={() => setIsFilterOpen(false)}
          className="text-blueish text-sm absolute right-3 top-2 hover:underline cursor-pointer"
        >
          close
        </p>
        <MobileFilter />
      </div>
      <div className="flex max-md:flex-col max-md:gap-2 justify-between md:items-center">
        <h1 className="font-medium text-lg text-black/70">
          {hotels.length} properties found
        </h1>
        <div className="flex gap-3">
          <div className="relative flex items-center cursor-pointer flex-1">
            <p className="absolute text-xs left-4 max-sm:hidden">Sort by:</p>
            <select
              name=""
              id=""
              className="relative z-[9] bg-transparent appearance-none cursor-pointer max-sm:pl-4 pl-16 pr-8 text-sm border-[1px] w-full h-8 md:w-40 outline-blueish rounded-full border-black/40"
            >
              <option value="">Popular</option>
              <option value="">High to low</option>
              <option value="">Low to high</option>
            </select>
            <BiSort className="absolute right-4 text-black/70" />
          </div>
          <div className="relative flex items-center cursor-pointer flex-1 lg:hidden">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex gap-1 justify-center items-center text-sm border-[1px] w-full h-8 md:w-40 outline-blueish rounded-full bg-white border-black/40"
            >
              <Filter size={16} className=" text-black/50" />
              Filter
            </button>
          </div>
          <div className="relative flex items-center cursor-pointer flex-1 lg:hidden">
            <Link
              className="w-full"
              href={"/pages/travel/hotel/customer/hotels-map-view"}
            >
              <button className="flex gap-1 justify-center items-center text-sm border-[1px] w-full h-8 md:w-40 outline-blueish rounded-full bg-white border-black/40">
                <Map size={16} className=" text-black/50" />
                Map
              </button>
            </Link>
          </div>
        </div>
      </div>
      <PropertyCard hotels={hotels} />
    </div>
  );
};

export default PropertyList;
