"use client";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import { useContext } from "react";
import { HotelsContext } from "../hotels-filter/context/HotelsProvider";
import Filter from "../hotels-filter/components/Filter";
import MapPropertyCard from "./MapPropertyCard";
import Link from "next/link";
import { FilterIcon } from "lucide-react";
import MobileFilter from "../hotels-filter/components/MobileFilter";
import dynamic from "next/dynamic";

const DynamicMapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const DynamicTileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const DynamicMarker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const DynamicPopup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const Map = () => {
  const { hotels, setIsFilterOpen, isFilterOpen } = useContext(HotelsContext);
  const [customIcon, setCustomIcon] = useState();

  useEffect(() => {
    const L = require("leaflet");

    setCustomIcon(
      new L.icon({
        iconUrl: "/travel/Mappin.svg",
        iconSize: [30, 45],
        popupAnchor: [0, -34],
      })
    );
  }, []);
  return (
    <section className="flex fixed inset-0 bg-white">
      <div
        className={`${
          !isFilterOpen && "h-0"
        } fixed overflow-y-auto transition-all duration-500 inset-0 bg-white z-[99999]`}
      >
        <p
          onClick={() => setIsFilterOpen(false)}
          className="text-blueish text-sm absolute right-3 top-2 hover:underline cursor-pointer"
        >
          close
        </p>
        <MobileFilter />
      </div>
      <Link href={"/pages/travel/hotel/customer/hotels-filter"}>
        <button className="absolute z-[999] text-xs right-9 top-9 px-3 shadow-xl bg-white rounded-md border-[1px] h-8 flex justify-center items-center text-blueish">
          Close map
        </button>
      </Link>
      <div className="absolute z-[999] left-16 top-9 flex items-center shadow-xl cursor-pointer sm:hidden text-blueish">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex gap-1 justify-center items-center text-xs border-[1px] h-8 px-4 rounded-md bg-white"
        >
          <FilterIcon size={15} className=" text-blueish" />
          Filter
        </button>
      </div>
      <div className="max-sm:hidden flex-1 max-w-[15rem] overflow-y-auto filter_scroll">
        <Filter />
      </div>
      <div className="z-[999] flex-grow-0 flex-shrink-0 w-[33rem] overflow-y-auto filter_scroll px-3 max-lg:hidden">
        <ul className="flex flex-col gap-3 mt-7">
          {hotels.map((h) => (
            <MapPropertyCard h={h} />
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <DynamicMapContainer
          style={{ height: "100%", width: "100%" }}
          center={[51.505, -0.09]}
          zoom={12}
          scrollWheelZoom={true}
        >
          <DynamicTileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {hotels.map((h) => (
            <DynamicMarker
              riseOnHover={true}
              icon={customIcon}
              position={[h.location.latitude, h.location.longitude]}
            >
              <DynamicPopup>
                <MapPropertyCard h={h} />
              </DynamicPopup>
            </DynamicMarker>
          ))}
        </DynamicMapContainer>
      </div>
    </section>
  );
};

export default Map;
