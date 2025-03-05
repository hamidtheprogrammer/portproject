"use client";
import { DropDownIcon, LocationIcon2 } from "@/app/svg";
import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [islocDDOpen, setIsLocDDOpen] = useState<boolean>(false);

  const navBg = useRef(null);

  useGSAP(() => {
    gsap.to(navBg.current, {
      height: "100%",
      duration: 1,
      scrollTrigger: {
        scroller: "#landing_travel",
        trigger: ".navBg_trigger",
        start: "top 70%",
        end: "top top",
        scrub: 1,
      },
    });
    gsap.to(".logo, .location_icon, .drop", {
      color: "rgba(23, 37, 84, 1)",
      duration: 1,
      scrollTrigger: {
        scroller: "#landing_travel",
        trigger: ".navBg_trigger",
        start: "top 70%",
        end: "top top",
        scrub: 1,
      },
    });

    gsap.to(".navBtn", {
      borderColor: "rgba(229, 231, 235, 0.5)",
      duration: 1,
      scrollTrigger: {
        scroller: "#landing_travel",
        trigger: ".navBg_trigger",
        start: "top 70%",
        end: "top top",
        scrub: 1,
      },
    });
  });

  return (
    <header className="fixed z-[9999] w-full top-0 flex text-white">
      <nav
        className={`fixed flex flex-col pt-20 items-center text-black h-full w-full md:max-w-80 bg-white transition-all duration-500 ${
          !isNavOpen && "-translate-x-full"
        }`}
      >
        <h1 className="font-semibold text-2xl w-[70%]">HAMVILLA</h1>
        <ul className="mt-16 w-[70%] flex flex-col gap-3">
          <li className="text-lg rounded-sm pl-6 py-6 border-[1px] cursor-pointer hover:scale-105 transition-all duration-500">
            Hotels
          </li>
          <li className="text-lg rounded-sm pl-6 py-6 border-[1px] cursor-pointer hover:scale-105 transition-all duration-500">
            Flights
          </li>
        </ul>
      </nav>
      <nav
        className={`${
          !islocDDOpen && "opacity-0 scale-95 pointer-events-none"
        } fixed sm:right-8 max-sm:w-full max-w-[90%] max-sm:left-1/2 max-sm:-translate-x-1/2 top-20 flex flex-col gap-4 p-5 text-black rounded-xl bg-white transition-all duration-500`}
      >
        <p className="text-[0.65rem] tracking-[0.19rem]">CHOOSE A LOCATION</p>
        <ul className=" grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          <li className="max-sm:w-full  text-lg rounded-sm pl-6 py-6 border-[1px] cursor-pointer hover:scale-105 transition-all duration-500 w-40">
            Hotels
          </li>
          <li className="max-sm:w-full text-lg rounded-sm pl-6 py-6 border-[1px] cursor-pointer hover:scale-105 transition-all duration-500 w-40">
            Flights
          </li>
          <li className="max-sm:w-full text-lg rounded-sm pl-6 py-6 border-[1px] cursor-pointer hover:scale-105 transition-all duration-500 w-40">
            Hotels
          </li>
          <li className="max-sm:w-full text-lg rounded-sm pl-6 py-6 border-[1px] cursor-pointer hover:scale-105 transition-all duration-500 w-40">
            Flights
          </li>
        </ul>
      </nav>
      <div
        onClick={() => setIsNavOpen((prev) => !prev)}
        className={`relative z-[99] border-gray-200/50 border-r-[1px] border-b-[1px] cursor-pointer bg-white flex flex-col justify-center items-center aspect-square max-sm:h-14 h-20`}
      >
        <div
          className={`absolute w-8 max-sm:w-6 h-[2px] bg-blue-950 ${
            isNavOpen ? "rotate-[225deg]" : "-translate-y-1 sm:-translate-y-2"
          }  transition-all duration-700`}
        ></div>
        <div
          className={`absolute w-8 max-sm:w-6 h-[2px] bg-blue-950 ${
            isNavOpen ? "-rotate-[225deg]" : "translate-y-1 sm:translate-y-2"
          } transition-all duration-700`}
        ></div>
      </div>
      <div className="relative flex flex-1 justify-between max-sm:h-14 max-sm:px-3 h-20 px-8 items-center">
        <div
          ref={navBg}
          className="absolute bg-white h-0 w-full top-0 left-0 border-gray-200/50 border-b-[1px]"
        ></div>
        <h1 className="relative z-[99] font-semibold text-lg logo">HAMVILLA</h1>

        <button
          onClick={() => setIsLocDDOpen((prev) => !prev)}
          className="navBtn relative z-[99] flex items-center gap-4 border-[1px] border-gray-50/20 rounded-sm text-xs font-medium  max-sm:p-3 p-4"
        >
          <LocationIcon2
            height="20"
            width="20"
            strokeWidth={2}
            color="text-white"
          />
          <span
            className={`${
              islocDDOpen ? "" : "rotate-180"
            } transition-all duration-500`}
          >
            <DropDownIcon height="13" width="13" color="drop" />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
