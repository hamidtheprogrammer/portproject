import React from "react";
import { Property } from "..";
import { DropDownIcon, StarIcon } from "@/app/svg";
import { BedDouble, Check, Dot, MapPin, ShowerHeadIcon } from "lucide-react";
import { BsPeople } from "react-icons/bs";
import Link from "next/link";

export const imgPool = [
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const PropertyCard = ({ hotels }: { hotels: Property[] }) => {
  return (
    <ul className="flex flex-col gap-3 mt-7">
      {hotels.map((h) => (
        <li
          key={h.id}
          className="hover:border-blueish flex rounded-lg overflow-hidden shadow-[0px_2px_10px_rgba(0,0,0,0.1)] border-[1px] md:h-[17rem] h-[19rem]"
        >
          <img
            className="max-sm:max-w-[7rem] max-w-[15rem] max-h-full object-cover h-full w-full"
            src={imgPool[Math.round(Math.random() * imgPool.length)]}
            alt="picture"
          />
          <div className="p-3 flex-1 flex flex-col justify-center max-xs:gap-1 max-lg:gap-2">
            <div className="flex max-md:flex-col md:items-center gap-1">
              <h1 className="text-blueish font-bold text-lg leading-tight">
                {h.name}
              </h1>
              <span className="flex">
                {Array.from({ length: h.rating }).map((s) => (
                  <StarIcon height="15" width="15" />
                ))}
              </span>
            </div>
            <div className="flex items-center text-sm">
              <span className="w-fit rounded-l-full rounded-br-full bg-blueish/80 py-1 px-2 text-xs font-medium text-white">
                {h.rating}.0/5
              </span>{" "}
              <Dot /> <span className="font-light">44 reviews</span> <Dot />{" "}
              <span className="text-blueish/80 font-bold max-sm:hidden">
                {h.rating === 5
                  ? "Excellent"
                  : h.rating === 4
                  ? "Very Good"
                  : h.rating === 3
                  ? "Good"
                  : "Okay"}
              </span>
            </div>
            <div className="flex max-xs:flex-col xs:items-center text-xs font-light">
              <MapPin color="orange" size={18} />
              <span className="w-fit">Near {h.nearbyTransport}</span>
              <Dot className="max-sm:hidden" />
              <span className="max-sm:hidden">{h.borough}</span>
              <Dot className="max-xs:hidden" />
              <a
                className="text-blueish hover:underline"
                href="/pages/travel/hotel/customer/hotels-map-view"
              >
                view on map
              </a>
            </div>
            <div className="rounded-tl-md rounded-br-md text-xs bg-green-700 px-2 py-1 text-white font-bold w-fit">
              {h.bookingFlexibility}
            </div>
            <div className="flex mt-2 text-xs max-md:hidden font-bold text-black/70">
              <span className="flex gap-1 items-center">
                {h.bedrooms}
                <BedDouble size={18} />
              </span>
              <Dot />
              <span className="flex gap-1 items-center">
                {h.bathrooms}
                <ShowerHeadIcon size={16} />
              </span>
              <Dot />
              <span className="flex gap-1 items-center">
                {h.guestCapacity}
                <BsPeople size={16} />
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs max-md:hidden">
                {h.amenities.map((a) => (
                  <p className="flex text-black/60 gap-1">
                    <Check size={16} className="text-green-500" />
                    {a}
                  </p>
                ))}
              </span>
              <div>
                <span className="self-end text-xl font-semibold">
                  ${h.pricePerNight}
                </span>
                <Link
                  href={`/pages/travel/hotel/customer/hotel-details/${h.id}`}
                >
                  <button className=" bg-blueish flex items-center w-fit text-white rounded-md h-10 px-4 text-sm self-end">
                    Check Availability{" "}
                    <DropDownIcon
                      height="20"
                      width="20"
                      color="rotate-90"
                      strokeWidth={0.7}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PropertyCard;
