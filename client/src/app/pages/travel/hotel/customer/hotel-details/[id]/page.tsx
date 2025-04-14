"use client";
import React from "react";
import HotelsProvider from "../../hotels-filter/context/HotelsProvider";
import Main from "./components/Main";

const page = () => {
  return (
    <HotelsProvider>
      <Main />
    </HotelsProvider>
  );
};

export default page;
