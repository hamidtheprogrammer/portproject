import React from "react";
import { productsSeed } from "../../products-filtering";
import Image from "next/image";

const frequent = [productsSeed[0], productsSeed[1], productsSeed[2]];

const FrequentlyBT = () => {
  return (
    <div className="bg-white rounded-lg border-[1px] text-sm h-fit p-5 md:w-[26rem] w-full">
      <h1 className="font-semibold ">Frequently bought together</h1>
      <hr className="my-4" />
      <ul className="flex flex-col gap-9">
        {frequent.map((prod) => (
          <li key={prod.title} className="flex items-center gap-3">
            <input type="checkbox" />
            <div className="p-1 border-[1px] rounded-md">
              <Image
                alt="Product image"
                src={prod.image}
                width={50}
                height={50}
                className=""
              />
            </div>
            <span>
              <p className="text-blue-500 hover:underline cursor-pointer font-medium text-xs">
                {prod.title}
              </p>
              <strong className="font-semibold">${prod.price}</strong>
            </span>
          </li>
        ))}
      </ul>
      <button className="mt-10 text-sm h-8 rounded-lg w-full border-[#4039be] text-[#4039be] border-[1px] hover:first-line:opacity-70">
        Add 3 items
      </button>
    </div>
  );
};

export default FrequentlyBT;
