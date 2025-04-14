"use client";
import { DropDownIcon } from "@/app/svg";
import React, { useEffect, useRef, useState } from "react";
import { IDirection } from "./Hero";

const bgLoc = [
  { place: "London, England", img: "/travel/london.jpg" },
  { place: "Bangkok, Thailand", img: "/travel/beach.jpg" },
  { place: "Pharoah, Egypt", img: "/travel/egypt.jpg" },
  { place: "London, England", img: "/travel/london.jpg" },
  { place: "Bangkok, Thailand", img: "/travel/beach.jpg" },
  { place: "Pharoah, Egypt", img: "/travel/egypt.jpg" },
];

const SelectedLocations = () => {
  const ref = useRef(null);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [itmWidth, setItmWidth] = useState<number>(0);
  const allow = useRef(true);
  // const itmWidth =
  //   typeof window !== null &&
  //   document.querySelector(`.carousel-itm`).offsetWidth;
  useEffect(() => {
    const itm: HTMLLIElement = document.querySelector(
      `.carousel-itm`
    ) as HTMLLIElement;
    if (itm && itm.offsetWidth) setItmWidth(itm.offsetWidth);
  }, []);

  function setIndex(direction: IDirection) {
    switch (direction) {
      case IDirection.FORWARD:
        if (currentImg === 3) {
          allow.current = false;
          setCurrentImg(0);
        } else {
          allow.current = true;
          setCurrentImg((prev) => prev + 1);
        }
        break;
      case IDirection.BACKWARD:
        if (currentImg === 1) {
          allow.current = false;
          setCurrentImg(3);
        } else {
          allow.current = true;
          setCurrentImg((prev) => prev - 1);
        }
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (currentImg === 0) {
        (allow.current = true), setCurrentImg(1);
      }
    }, 0);
  }, [currentImg]);

  return (
    <section className="md:pl-20 bg-white mb-40">
      <div className="flex flex-col justify-center h-60 items-center gap-7">
        <p className="text-blue-950 text-[0.65rem] tracking-[0.16rem]">
          HAMVILLA DESTINATIONS
        </p>
        <h1 className="text-blue-950 md:text-5xl font-semibold">
          Across the world
        </h1>
      </div>
      <div className="relative overflow-hidden w-full">
        <ul
          style={{
            transform: `translateX(-${(itmWidth + 20) * currentImg}px)`,
          }}
          ref={ref}
          className={`flex items-center  h-[450px] max-sm:h-[60vh] ${
            allow.current && "transition-all duration-1000"
          }`}
        >
          {bgLoc.map((itm, idx) => (
            <li
              style={{
                transform:
                  typeof window !== "undefined" && window.innerWidth > 900
                    ? `translateX(-${itmWidth / 2}px)`
                    : `translateX(-${itmWidth * 0.7 + 35}px)`,
              }}
              className={`relative ${
                currentImg === idx - 1 ? "h-full" : "md:h-[280px] h-[150px]"
              } overflow-hidden rounded-xl carousel-itm ${
                allow.current && "transition-all duration-1000"
              }`}
              key={idx}
            >
              <div className="absolute z-[98] rounded-xl inset-0 gradient_overlay"></div>
              <h1 className="z-[99] absolute text-2xl font-semibold bottom-[10%] left-1/2 -translate-x-1/2 text-white uppercase">
                {itm.place}
              </h1>
              <img
                className={`relative z-[9] h-full w-full object-cover`}
                src={itm.img}
              />
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIndex(IDirection.BACKWARD)}
          className="absolute top-1/2 -translate-y-1/2 -rotate-90 bg-white h-10 w-10 flex justify-center items-center rounded-[99px]"
        >
          <DropDownIcon
            height="20"
            width="20"
            strokeWidth={0.6}
            color="text-blue-950"
          />
        </button>
        <button
          onClick={() => setIndex(IDirection.FORWARD)}
          className="absolute top-1/2 -translate-y-1/2 right-0 rotate-90 bg-white h-10 w-10 flex justify-center items-center rounded-[99px]"
        >
          <DropDownIcon
            height="20"
            width="20"
            strokeWidth={0.6}
            color="text-blue-950"
          />
        </button>
      </div>
    </section>
  );
};

export default SelectedLocations;
