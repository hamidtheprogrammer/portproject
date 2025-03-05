import React from "react";
import { productsSeed } from "../../products-filtering";
import { StarIcon } from "@/app/svg";

const SimilarProduct = () => {
  return (
    <div className="mt-20 w-full flex flex-col items-center">
      <header className="mb-8 text-center">
        <h1 className="text-xl font-bold">Similar Products</h1>
        <p className="primaryText text-sm">People also bought</p>
      </header>
      <ul className="flex justify-center max-sm:flex-col gap-3">
        {productsSeed.slice(0, 5).map((prod) => (
          <li
            key={prod.title}
            className="max-w-[10rem] flex flex-col items-center"
          >
            <div className="w-full h-[10rem]">
              <img
                className="w-full object-cover s"
                src={prod.image}
                alt="product image"
              />
            </div>
            <a
              className="text-sm text-blue-600 hover:underline tracking-tighter"
              href="##"
            >
              {prod.title}
            </a>
            <p className="text-xs flex items-center w-full my-1">
              {prod.rating}/5 <StarIcon height="15" width="15" />
            </p>
            <strong className="w-full">${prod.price.toLocaleString()}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimilarProduct;
