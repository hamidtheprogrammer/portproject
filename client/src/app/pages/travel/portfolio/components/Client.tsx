"use client";
import React, { useEffect, useState } from "react";
import { IDirection } from "./Hero";
import { testimonies, travellerPhotos } from "../..";
import { DropDownIcon } from "@/app/svg";
import { useRef } from "react";
import gsap from "gsap";

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function changeIndex(direction: IDirection) {
    switch (direction) {
      case IDirection.FORWARD:
        if (currentIndex === 2) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex((prev) => prev + 1);
        }
        break;
      case IDirection.BACKWARD:
        if (currentIndex === 0) {
          setCurrentIndex(2);
        } else {
          setCurrentIndex((prev) => prev - 1);
        }
        break;
      default:
        break;
    }
  }

  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!ref.current || !innerRef.current) return;

    const outer = ref.current;
    const inner = innerRef.current;

    let targetX = 0;
    let currentX = 0;
    let animationFrame: number | null = null;

    function handleMouseMove(e: MouseEvent) {
      const rect = outer.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const outerWidth = outer.clientWidth;
      const innerWidth = inner.scrollWidth;
      const innerNonVisibleWidth = innerWidth - outerWidth;

      // Calculate targetX based on mouse position
      targetX = -(offsetX / outerWidth) * innerNonVisibleWidth;
    }

    function animate() {
      const lerpFactor = 0.08; // Adjust this for how "snappy" or "smooth" you want the drag to feel.
      currentX = currentX + (targetX - currentX) * lerpFactor;

      gsap.set(inner, {
        x: currentX, // Using x (translateX) for better performance
      });

      animationFrame = requestAnimationFrame(animate);
    }

    outer.addEventListener("mousemove", handleMouseMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      outer.removeEventListener("mousemove", handleMouseMove);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="relative bg-primaryBg">
      <div className="absolute inset-0 bg-travel h-[calc(100vh+4rem)]">
        <img
          className="w-full h-full object-cover"
          src="/travel/beach.jpg"
          alt="background"
          width={100}
          height={100}
        />
      </div>
      <div className="text-white py-40 lg:py-40 max-md:w-full w-[calc(100%-5rem)] max-sm:px-5 sm:px-[6rem] md:px-[6%] relative flex flex-col items-center md:left-20">
        <ul className="flex max-md:hidden flex-col gap-20 absolute left-5 text-white text-sm">
          {Array.from({ length: testimonies.length }).map((num, idx) => (
            <li
              key={idx}
              className={`${
                currentIndex !== idx && "text-white/30 border-white/30"
              } border-[1px] rounded-[9999] h-10 w-10 flex justify-center items-center transition-all duration-500`}
            >
              {idx + 1}
            </li>
          ))}
        </ul>
        <span className="flex flex-col items-center">
          <p className="text-center text-sm max-w-[30rem]">
            {testimonies[currentIndex].comment}
          </p>
          <h1 className="text-center text-xl font-semibold mt-4">
            {testimonies[currentIndex].name}
          </h1>
          <div className="flex gap-3 mt-10">
            <button
              onClick={() => changeIndex(IDirection.BACKWARD)}
              className="-rotate-90 bg-white h-12 w-12 flex justify-center items-center rounded-[999]"
            >
              <DropDownIcon
                height="20"
                width="20"
                strokeWidth={0.6}
                color="text-blue-950"
              />
            </button>
            <button
              onClick={() => changeIndex(IDirection.FORWARD)}
              className="rotate-90 bg-white h-12 w-12 flex justify-center items-center rounded-[999]"
            >
              <DropDownIcon
                height="20"
                width="20"
                strokeWidth={0.6}
                color="text-blue-950"
              />
            </button>
          </div>
        </span>
      </div>
      <div className="max-md:w-full w-[calc(100%-5rem)] max-sm:px-5 sm:px-[6rem] md:px-[6%] relative flex justify-center md:left-20">
        <div className="bg-white w-full p-3">
          <p className="text-blue-950 mb-4 text-[0.65rem] tracking-[0.16rem]">
            PHOTOS TAKEN BY TRAVELLERS
          </p>
          <div
            ref={ref}
            className="md:overflow-hidden overflow-x-auto w-full hiddenscroll"
          >
            <ul ref={innerRef} className="relative flex h-80 ">
              {travellerPhotos.map((photo, idx) => (
                <li key={idx} className="relative group h-full">
                  <img
                    src={photo}
                    alt="image"
                    className="h-full min-w-[20rem] object-cover"
                  />
                  <div className="absolute max-md:opacity-100 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/40 inset-0"></div>
                  <p className="absolute max-md:opacity-100 text-white text-[0.65rem] tracking-[0.16rem] border-[1px] border-white h-16 w-16 flex justify-center items-center rounded-[999] left-1/2 -translate-x-1/2 top-3/4 opacity-0 group-hover:opacity-100 md:group-hover:-translate-y-full transition-all duration-500 cursor-pointer">
                    view
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
