"use client";
import React from "react";
import Header from "../products-filtering/components/Header";
import Footer from "../products-filtering/components/Footer";
import { productsSeed } from "../products-filtering";
import { DeleteIcon, HomeIcon } from "@/app/svg";

const page = () => {
  const dumbTotal = productsSeed
    .slice(0, 3)
    .reduce((total, current, idx) => total + current.price * (idx + 1), 0);
  return (
    <div
      className={`fixed inset-0 overflow-y-auto w-full z-[99999] bg-primaryBg flex flex-col justify-between`}
    >
      <Header />
      <main className="flex-1 px-3 md:px-16 py-8 mb-20">
        <span className="flex items-center text-sm font-medium gap-2">
          <HomeIcon height="15" width="15" />
          {">"} <p>Products</p>
        </span>
        <h1 className="font-bold text-2xl mt-2 mb-6">Cart</h1>
        <div className="flex justify-between max-lg:flex-col max-lg:gap-5">
          <span className="overflow-x-auto scrollBar">
            <ul className="text-xs flex gap-3 text-center font-semibold mb-4 w-fit">
              <li className="w-60">NAME</li>
              <li className="w-16">COLOR</li>
              <li className="w-16">PRICE</li>
              <li className="w-16">QUANTITY</li>
              <li className="w-16">TOTAL</li>
              <li className="w-16"></li>
            </ul>
            <ul className="flex flex-col w-fit">
              {productsSeed.slice(0, 3).map((prod, idx) => (
                <li key={prod.title} className="flex gap-3">
                  <span className="w-60 flex gap-2 items-center">
                    <div className="flex-shrink-0 border-[1px] w-12 h-12 rounded-md flex justify-center items-center border-b-[1px] pb-3 mt-3">
                      <img src={prod.image} alt="product image" />
                    </div>
                    <a
                      href="##"
                      className="text-blue-400 hover:text-blue-500 hover:underline text-xs "
                    >
                      {prod.title}
                    </a>
                  </span>
                  <span className="w-16 text-xs flex gap-2 items-center justify-center">
                    {prod.color}
                  </span>
                  <span className="w-16 text-xs flex gap-2 items-center justify-center">
                    ${prod.price.toLocaleString()}
                  </span>
                  <span className="w-16 text-xs flex gap-2 items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="w-16 text-xs flex gap-2 items-center justify-center">
                    ${(prod.price * (idx + 1)).toLocaleString()}
                  </span>
                  <span className="w-16 text-xs flex  gap-2 items-center justify-center cursor-pointer">
                    <DeleteIcon height="15" width="15" />
                  </span>
                </li>
              ))}
              <span className="w-full text-xs font-bold mt-2 text-center">
                <p className="relative left-[30rem] w-16">
                  ${dumbTotal.toLocaleString()}
                </p>
              </span>
            </ul>
          </span>
          <span className="flex-1 max-w-72 border-[1px] bg-white p-5 rounded-lg h-fit">
            <div className="flex justify-between items-center">
              <p className="text-xs">Items subtotal:</p>
              <h1 className="text-sm font-medium">
                ${dumbTotal.toLocaleString()}
              </h1>
            </div>
            <button className="mt-4 text-sm h-8 rounded-lg w-full bg-[#4039be] text-white hover:opacity-70">
              Checkout
            </button>
          </span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
