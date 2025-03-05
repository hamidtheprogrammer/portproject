import React, { useState } from "react";
import { detailsInfo } from "..";
import { StarIcon } from "@/app/svg";
import Delivery from "./Delivery";
import Highlights from "./Highlights";

const Details = () => {
  const imgList = [
    "/DetailMacFront.png",
    "/DetailMacLeft.png",
    "/DetailMacRight.png",
    "/DetailMacTop.png",
  ];
  const [offset, setOffset] = useState<number>(100);

  function handleOffsetChange(number: number) {
    setOffset(100 * number);
  }

  return (
    <div className="relative flex max-lg:flex-col py-5 gap-9 w-full">
      <div className="flex flex-1 h-fit lg:sticky lg:self-start lg:top-16">
        <ul className="flex max-w-24 flex-col gap-4">
          {imgList.map((img, idx) => (
            <li
              onClick={() => handleOffsetChange(idx)}
              key={img}
              className={`relative w-full border-[1px] rounded-lg p-5 aspect-square min-w-full cursor-pointer ${
                offset / 100 === idx && "border-[#8884d8]"
              }`}
            >
              <img src={img} alt="image" className="w-full" />
            </li>
          ))}
        </ul>
        <ul className="flex-1 flex flex-row overflow-hidden">
          {imgList.map((img) => (
            <li
              style={{
                left: `-${offset}%`,
              }}
              key={img}
              className={`relative select-none w-full min-w-full transition-all duration-500`}
            >
              <img
                src={img}
                alt="image"
                className="lg:w-full max-product_md:h-fit max-lg:h-full"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex max-md:flex-col gap-1">
        <span className="flex-1">
          <h1 className="text-xl font-medium">{detailsInfo.title}</h1>
          <p className="text-xs text-blue-400 cursor-pointer hover:underline">
            Visit the apple store
          </p>
          <div className="flex text-xs gap-5 items-center">
            <ul className="flex">
              {Array.from({ length: Number(detailsInfo.rating) }).map(
                (_, idx) => (
                  <li key={idx}>
                    <StarIcon height="15" width="15" />
                  </li>
                )
              )}
              <p className="font-medium">{detailsInfo.rating}/5</p>
            </ul>
            <p>{detailsInfo.reviews.toLocaleString()} reviews</p>
          </div>
          <div className="text-xs mt-1 bg-slate-700 w-fit text-white px-2 py-1 rounded-tr-full rounded-br-full">
            #1 Best seller
          </div>
          <hr className="mt-1" />
          <h1 className="text-xl flex items-baseline gap-2 mt-2 font-semibold">
            ${detailsInfo.price.toLocaleString()}
            <p className="text-xs font-bold text-[#EE0B4F]">
              Save ${(detailsInfo.price * 0.08).toFixed(2)}
            </p>
          </h1>
          <div className="relative mt-3 bg-[#E8E7FC] text-xs rounded-lg p-4 easypay border-[1px] border-gray-300 flex flex-col gap-2">
            <strong className="text-[#4039be] text-sm">
              Spread the Cost with EasyPay
            </strong>
            <p>
              <strong>Monthly payments</strong>
            </p>
            <ul>
              <li>
                ✔ Make monthly payments from{" "}
                <strong>£8.06 per month for 36 months</strong>
              </li>
            </ul>
            <p>
              <strong>Buy Now, Pay Later</strong>
            </p>
            <ul>
              <li>
                ✔ Pay as much or as little as you like over{" "}
                <strong>6 months</strong>
              </li>
              <li>
                ✔ Settle in full by <strong>23 August 2025</strong> and pay{" "}
                <strong>zero interest</strong>
              </li>
            </ul>
          </div>
          <hr className="mt-5" />
          <Highlights />
        </span>
        <span className="md:max-w-[15rem] max-md:mt-4">
          <Delivery />
        </span>
      </div>
    </div>
  );
};

export default Details;
