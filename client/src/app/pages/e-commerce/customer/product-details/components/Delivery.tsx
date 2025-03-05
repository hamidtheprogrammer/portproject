import React from "react";
import { detailsInfo } from "..";
import { LocationIcon } from "@/app/svg";

const Delivery = () => {
  return (
    <div className="border-[1px] p-3 text-xs border-slate-300 rounded-lg">
      <h1 className="text-xl flex items-baseline gap-2 font-semibold mb-2">
        ${detailsInfo.price.toLocaleString()}
      </h1>
      <p className="leading-5">
        <a className="text-blue-500 underline" href="##">
          FREE delivery.
        </a>
        <strong>Wednesday, 26 February.</strong>
        <a className="text-blue-500 underline" href="###">
          Details
        </a>
      </p>
      <p className="mt-3">
        Or fastest delivery <strong>Tomorrow, 24 February</strong>. Order within
        6 hrs 27 mins.
        <a className="text-blue-500 underline" href="###">
          Details
        </a>
      </p>
      <div className="flex mt-3 gap-2">
        <LocationIcon width="15" height="15" />
        <a className="text-blue-500" href="###">
          Deliver to you - your location
        </a>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <span className="text-green-600 text-lg font-semibold">In stock</span>
        <span>
          <h1 className="font-medium mb-1">Quantity:</h1>
          <select
            className="h-8 rounded-lg border-[1px] w-full px-3 focus:outline-[#4039be]"
            name=""
            id=""
          >
            {Array.from({ length: 5 }).map((_, idx) => (
              <option>{idx + 1}</option>
            ))}
          </select>
        </span>
        <button className="text-sm h-8 rounded-lg w-full border-[#4039be] text-[#4039be] border-[1px] hover:first-line:opacity-70">
          Add to basket
        </button>
        <button className="text-sm h-8 rounded-lg w-full bg-[#4039be] text-white hover:opacity-70">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Delivery;
