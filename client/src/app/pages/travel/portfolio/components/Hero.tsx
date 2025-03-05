"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { ArrowLeftIcon, ArrowRightIcon, DropDownIcon } from "@/app/svg";

const bgLoc = [
  { place: "Bangkok, Thailand", img: "/travel/beach.jpg" },
  { place: "Pharoah, Egypt", img: "/travel/egypt.jpg" },
];

export enum IDirection {
  FORWARD = "forward",
  BACKWARD = "backward",
}

const Hero = () => {
  const [currentBg, setCurrentBg] = useState<number>(0);

  function handleBgChange(direction: IDirection) {
    switch (direction) {
      case IDirection.FORWARD:
        if (currentBg === bgLoc.length - 1) {
          setCurrentBg(0);
        } else {
          setCurrentBg((prev) => prev + 1);
        }
        break;
      case IDirection.BACKWARD:
        if (currentBg === 0) {
          setCurrentBg(bgLoc.length - 1);
        } else {
          setCurrentBg((prev) => prev - 1);
        }
        break;
      default:
        break;
    }
  }

  const [scroll, setScroll] = useState<number>(0);
  const pg = useRef<HTMLElement | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined")
      pg.current = document.getElementById("landing_travel") as HTMLDivElement;
  }, []);

  useEffect(() => {
    function handleScrollChange() {
      if (!pg.current || typeof window !== "undefined") return;
      setScroll(
        (pg.current.scrollTop /
          (pg.current.scrollHeight - pg.current.clientHeight)) *
          80
      );
    }

    if (pg.current && typeof window !== "undefined")
      pg.current.addEventListener("scroll", handleScrollChange);

    return () => {
      pg.current &&
        pg.current.removeEventListener("scroll", handleScrollChange); // <== Fix this
    };
  }, []);

  return (
    <div className="relative z-[9999] h-full max-sm:min-h-[120vh]">
      {bgLoc.map((bg, idx) => (
        <div
          key={bg.place}
          className={`${
            idx === currentBg ? "z-10 opacity-100" : "opacity-0"
          }  absolute inset-0 bg-travel transition-all duration-500`}
        >
          <img
            className="w-full h-full object-cover transition-all duration-500"
            src={bg.img}
            alt="background"
            width={100}
            height={100}
          />
        </div>
      ))}
      <section className="relative  text-white h-full z-40">
        <div className="relative top-[20%] sm:left-[6rem] md:left-[13%] w-fit flex flex-col max-sm:items-center max-sm:w-full max-sm:text-center gap-6">
          <p className="text-[0.65rem] tracking-[0.16rem]">
            FAMILY TRAVEL AGENCY
          </p>
          <h1 className="max-xs:text-4xl text-5xl max-w-[27rem] md:text-6xl lg:text-7xl font-semibold md:max-w-[35rem]">
            Let's plan your next vacation
          </h1>
          <button className="bg-white mt-5 text-blue-950 text-[0.65rem] hover:opacity-85 hover:scale-105 transition-all duration-800 tracking-widest w-fit px-7 py-4 rounded-md">
            CONTACT US
          </button>
        </div>
        <div className="absolute flex gap-3 h-32 max-sm:w-full sm:w-[80%] lg:w-[40%]  bottom-0 right-0 navBg_trigger">
          <p className="absolute left-[10%] -top-[23%] text-[0.65rem] tracking-[0.16rem]">
            POPULAR LOCATION
          </p>
          <span className="flex flex-col justify-between items-center rounded-tl-md bg-white w-[10%]">
            <div
              onClick={() => handleBgChange(IDirection.BACKWARD)}
              className="flex-1 w-full flex justify-center items-center cursor-pointer"
            >
              <ArrowLeftIcon height="15" width="15" color="text-blue-950" />
            </div>
            <hr className="w-full" />
            <div
              onClick={() => handleBgChange(IDirection.FORWARD)}
              className="flex-1 w-full flex justify-center items-center cursor-pointer"
            >
              <ArrowRightIcon height="15" width="15" color="text-blue-950" />
            </div>
          </span>
          <span className="relative bg-white flex-1 text-blue-950 flex flex-col justify-center pl-[10%] gap-3">
            <h1 className="text-xl font-medium">{bgLoc[currentBg].place}</h1>
            <p className="text-[0.65rem] tracking-[0.19rem]">
              STARTING AT $4000
            </p>
            <div className="absolute right-0 h-full w-[10%] flex flex-col justify-center items-center">
              <div className="rotate-90">
                <DropDownIcon height="20" width="20" strokeWidth={0.5} />
              </div>
            </div>
          </span>
        </div>
      </section>
      <nav className="fixed py-5 flex flex-col items-center left-0 top-20 border-r-[1px] border-gray-200/50 z-[9999] h-full w-20 max-md:hidden">
        <div className=" w-[3px] h-[60%] bg-gray-300/75 rounded-full">
          <div
            style={{
              top: `${scroll}%`,
            }}
            className="relative w-[3px] h-[20%] bg-gray-500/70 rounded-full"
          ></div>
        </div>
      </nav>
      <Header />
    </div>
  );
};

export default Hero;
