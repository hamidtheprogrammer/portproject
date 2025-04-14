"use client";
import React from "react";
import Link from "next/link";

const Discover = () => {
  return (
    <section className="py-20 lg:py-40 max-md:w-full w-[calc(100%-5rem)] max-sm:px-5 sm:px-[6rem] md:px-[6%] relative flex max-lg:flex-col items-center gap-12 md:left-20 bg-primaryBg">
      <div className="flex-1 flex flex-col gap-10 ">
        <p className="text-blue-950 text-[0.65rem] tracking-[0.16rem]">
          HAMVILLA DESTINATIONS
        </p>
        <h1 className="text-blue-950 max-md:text-4xl md:text-5xl font-semibold">
          Discover Unforgettable Adventures
        </h1>
        <p className="text-blue-950/60 text-balance">
          Create memories that last a lifetime with tailor-made trips designed
          just for you. Whether you’re seeking tropical beaches, ancient
          wonders, or vibrant cityscapes, we bring your dream destinations
          within reach. With expert guidance, seamless planning, and handpicked
          experiences, every moment of your journey will be filled with
          excitement and ease.
        </p>
        <Link href={"/pages/travel/hotel/customer/home"}>
          <button className="text-[0.65rem] tracking-[0.16rem] text-white flex justify-between items-center h-12 w-fit px-8 bg-blueish/90 rounded-md">
            SEE OUR DESTINATIONS
          </button>
        </Link>
      </div>
      <div className="flex-1 rounded-md w-full lg:aspect-square">
        <img
          src="/travel/beach.jpg"
          alt="Image"
          className="object-cover w-full max-lg:h-[200px] rounded-md h-full"
        />
      </div>
    </section>
  );
};

export default Discover;
