import React from "react";
import {
  DeliveryIcon,
  FilterIcon,
  HeartIcon,
  StarIcon,
  StoreIcon,
} from "@/app/svg";
import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import { IProduct } from "..";

enum Isort {
  POPULAR = "most_popular",
  LOWHIGH = "low_to_high",
  HIGHLOW = "high_to_low",
}

function sortProducts(product: IProduct[]) {
  const sortedProduct = [...product];
  let swapped = true;
  while (swapped) {
    swapped = false;
    if (!sortedProduct) return;
    for (let i = 0; i < sortedProduct.length - 1; i++) {
      if (sortedProduct[i].price > sortedProduct[i + 1].price) {
        let init = sortedProduct[i];

        sortedProduct[i] = sortedProduct[i + 1];
        sortedProduct[i + 1] = init;
        swapped = true;
      }
    }
  }

  return sortedProduct;
}

const ProductList = () => {
  const { product, setProduct, setOpenFilter } = useContext(ProductContext);
  const handleSortChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case Isort.POPULAR:
        break;
      case Isort.LOWHIGH:
        const lowHigh = sortProducts(product as IProduct[]);
        if (lowHigh) setProduct(lowHigh);
        break;
      case Isort.HIGHLOW:
        const highLow = sortProducts(product as IProduct[]);
        if (highLow) setProduct(highLow.reverse());
        break;
    }
  };

  return (
    <section className="flex flex-col gap-5 flex-1">
      <div className="flex justify-between">
        <select
          name="sort"
          className="text-sm h-12 border-[1px] dark:darkBorder rounded-md w-56 px-2"
          onChange={handleSortChanged}
        >
          <option value={"most_popular"}>Most popular</option>
          <option value={"high_to_low"}>High to low</option>
          <option value={"low_to_high"}>Low to high</option>
        </select>
        <button
          onClick={() => setOpenFilter(true)}
          className="product_lg:hidden flex items-center justify-center gap-2 text-sm h-12 border-[1px] dark:darkBorder rounded-md w-56 px-2 bg-white"
        >
          <FilterIcon width="15" height="15" /> Filters
        </button>
      </div>
      <h1 className="text-2xl font-medium">Showing 150 results</h1>
      <ul className="grid grid-cols-3 max-product_semilg:grid-cols-2 max-product_md:grid-cols-1 gap-9 ">
        {product &&
          product.map((product, idx) => (
            <li
              key={idx}
              className="w-[17rem] bg-white flex flex-col justify-between py-5 px-4 rounded-xl group cursor-pointer"
            >
              <HeartIcon width="20" height="20" />
              <img
                src={product.image}
                alt="image"
                className="w-full aspect-square object-cover"
              />
              <h1 className="group-hover:underline mt-10">{product.title}</h1>
              <div className="flex text-xs gap-5 items-center mt-7">
                <ul className="flex">
                  {Array.from({ length: Number(product.rating) }).map(
                    (_, idx) => (
                      <li key={idx}>
                        <StarIcon height="15" width="15" />
                      </li>
                    )
                  )}
                  <p className="font-medium">{product.rating}/5</p>
                </ul>
                <p>{product.reviews.toLocaleString()} reviews</p>
              </div>
              <h1 className="text-lg flex items-baseline gap-4 mt-4 font-semibold">
                ${product.price}
                <p className="text-xs font-bold text-[#EE0B4F]">
                  Save ${(product.price * 0.08).toFixed(2)}
                </p>
              </h1>
              <p className="text-xs mt-1">
                From <b>${(product.price * 0.009).toFixed(2)}</b> per month for
                36 months
              </p>
              <div className="flex flex-col gap-4 text-sm p-2 py-3 mt-3 bg-slate-100 rounded-md">
                <span className="flex gap-2 items-center">
                  <DeliveryIcon width="15" height="15" /> Delivery available
                </span>
                <span className="flex gap-2 items-center">
                  <StoreIcon width="15" height="15" /> In-store collection
                  available
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-4">
                <button className="text-sm h-8 rounded-lg w-full border-[#4039be] text-[#4039be] border-[1px] hover:first-line:opacity-70">
                  View product
                </button>
                <button className="text-sm h-8 rounded-lg w-full bg-[#4039be] text-white hover:opacity-70">
                  Add to basket
                </button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ProductList;
