"use client";
import React, { useContext, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import { ProductContext } from "./ProductContext";
import Footer from "./components/Footer";

const Main = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  const { setOpenFilter, openFilter } = useContext(ProductContext);

  return (
    <div
      className={` ${
        isFullScreen && "fixed inset-0 overflow-y-auto w-full z-[99999]"
      } bg-primaryBg flex flex-col justify-between`}
    >
      <div
        className={`${
          !openFilter && "hidden"
        } p-3 fixed h-full w-full bg-black/20 z-[9999] flex justify-start lg:hidden`}
      >
        <button
          onClick={() => setOpenFilter(false)}
          className="absolute text-xl left-[16rem] top-5"
        >
          x
        </button>
        <Filter />
      </div>
      <Header />
      <div className="relative flex px-8 py-5 gap-9 min-h-[300vh]d">
        <section className="w-72 sticky top-5 self-start max-product_lg:hidden">
          <Filter />
        </section>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
