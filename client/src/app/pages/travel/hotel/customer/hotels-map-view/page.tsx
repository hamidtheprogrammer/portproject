"use client";
import React from "react";
import HotelsProvider from "../hotels-filter/context/HotelsProvider";
import Map from "./Map";

const page = () => {
  return (
    <HotelsProvider>
      <Map />
    </HotelsProvider>
  );
};

export default page;
