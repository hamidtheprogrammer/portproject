"use client";
import React, { useState } from "react";
import Footer from "../products-filtering/components/Footer";
import Details from "./components/Details";
import Header from "../products-filtering/components/Header";
import MoreDetails from "./components/MoreDetails";
import SimilarProduct from "./components/SimilarProduct";
import { HomeIcon } from "@/app/svg";

const page = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);

  return (
    <div
      className={` ${
        isFullScreen && "fixed inset-0 overflow-y-auto w-full z-[99999]"
      } bg-primaryBg`}
    >
      <Header />
      <div className="px-3 py-8">
        <span className="flex items-center text-sm font-medium gap-2">
          <HomeIcon height="15" width="15" />
          {">"}{" "}
          <p className="text-blueish hover:text-blue-500 cursor-pointer hover:underline">
            Products
          </p>{" "}
          {">"} <p>product detail</p>
        </span>
        <Details />
        <MoreDetails />
        <SimilarProduct />
      </div>
      <Footer />
    </div>
  );
};

export default page;
