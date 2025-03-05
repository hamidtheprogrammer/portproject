"use client";
import React, { useState } from "react";
import { IProduct } from "../../products-filtering";
import { StarIcon } from "@/app/svg";

const ProductCarousel = ({ products }: { products: IProduct[] }) => {
  const [offset, setOffSet] = useState<number>(100);
  return (
    <ul className="relative mt-4 flex gap-[2.5%] items-center overflow-hidden">
      {offset > 5 && (
        <button
          onClick={() => setOffSet((prev) => prev - 100)}
          className="left-0 -translate-y-1/2 absolute z-[99] bg-white h-16 w-16 rounded-[999px] border-[1px]"
        >
          l
        </button>
      )}
      {products.map((prod) => (
        <li
          style={{ left: `-${offset * 0.25}%` }}
          key={prod.title}
          className="relative min-w-[22.5%] transition-all duration-500 translate-x-"
        >
          <div className="border-[1px] rounded-xl h-[12rem] flex justify-center items-center">
            <img
              src={prod.image}
              alt="product image"
              className="h-4/5 object-cover"
            />
          </div>
          <h1 className="text-xs font-medium mt-4">{prod.title}</h1>
          <div className="flex text-xs gap-5 items-center mt-3">
            <ul className="flex">
              {Array.from({ length: Number(prod.rating) }).map((_, idx) => (
                <li key={idx}>
                  <StarIcon height="15" width="15" />
                </li>
              ))}
              <p className="font-medium">{prod.rating}/5</p>
            </ul>
            <p>{prod.reviews.toLocaleString()} reviews</p>
          </div>
          <p className="pt-5 text-lg font-semibold">
            ${prod.price.toLocaleString()}
          </p>
        </li>
      ))}
      <button
        onClick={() => setOffSet((prev) => prev + 100)}
        className="right-0 -translate-y-1/2 absolute z-[99] bg-white h-16 w-16 rounded-[999px] border-[1px]"
      >
        r
      </button>
    </ul>
  );
};

export default ProductCarousel;
