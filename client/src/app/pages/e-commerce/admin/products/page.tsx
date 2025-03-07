"use client";
import React, { useEffect, useState } from "react";
import { products } from ".";
import { DeleteIcon, HomeIcon } from "@/app/svg";
import Link from "next/link";
import {
  SortIconAscend,
  SortIconDescend,
  SortIconNeutral,
} from "./components/SortIcon";

enum ISort {
  NEUTRAL = "neutral",
  ASCENDING = "ascending",
  DESCENDING = "descending",
}

const Products = () => {
  const [takeSkip, setTakeSkip] = useState({ take: 8, skip: 0, sort: null });
  const [pagination, setPagination] = useState({
    pages: Math.ceil(products.length / takeSkip.take),
    pageNumber: 1,
  });
  const [currentPage, setCurrentPage] = useState<number>(pagination.pageNumber);
  const [searchParameter, setSearchParameter] = useState<string>("");
  const [data, setData] = useState(
    products.slice(takeSkip.skip, takeSkip.skip + takeSkip.take)
  );

  const [sortParameter, setSortParameter] = useState({
    product: ISort.NEUTRAL,
    price: ISort.NEUTRAL,
    datePublished: ISort.NEUTRAL,
  });

  function handleSortParameterChanged(sort: string) {
    switch (sort) {
      case "product":
        if (sortParameter.product === ISort.NEUTRAL) {
          setSortParameter((prev) => ({ ...prev, product: ISort.ASCENDING }));
          setData((prev) =>
            prev.sort((a, b) =>
              a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
            )
          );
        } else if (sortParameter.product === ISort.ASCENDING) {
          setSortParameter((prev) => ({ ...prev, product: ISort.DESCENDING }));
          setData((prev) =>
            prev
              .sort((a, b) =>
                a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
              )
              .reverse()
          );
        } else if (sortParameter.product === ISort.DESCENDING) {
          setSortParameter((prev) => ({ ...prev, product: ISort.NEUTRAL }));
          setData(products.slice(takeSkip.skip, takeSkip.skip + takeSkip.take));
        }
        setSortParameter((prev) => ({
          ...prev,
          price: ISort.NEUTRAL,
          datePublished: ISort.NEUTRAL,
        }));
        break;
      case "price":
        if (sortParameter.price === ISort.NEUTRAL) {
          setSortParameter((prev) => ({ ...prev, price: ISort.ASCENDING }));
          setData((prev) => prev.sort((a, b) => a.price - b.price));
        } else if (sortParameter.price === ISort.ASCENDING) {
          setSortParameter((prev) => ({ ...prev, price: ISort.DESCENDING }));
          setData((prev) => prev.sort((a, b) => b.price - a.price));
        } else if (sortParameter.price === ISort.DESCENDING) {
          setSortParameter((prev) => ({ ...prev, price: ISort.NEUTRAL }));
          setData(products.slice(takeSkip.skip, takeSkip.skip + takeSkip.take));
        }
        setSortParameter((prev) => ({
          ...prev,
          product: ISort.NEUTRAL,
          datePublished: ISort.NEUTRAL,
        }));
        break;
      case "datePublished":
        if (sortParameter.datePublished === ISort.NEUTRAL) {
          setSortParameter((prev) => ({
            ...prev,
            datePublished: ISort.ASCENDING,
          }));
          setData((prev) =>
            prev.sort(
              (a, b) => Number(a.datePublished) - Number(b.datePublished)
            )
          );
        } else if (sortParameter.datePublished === ISort.ASCENDING) {
          setSortParameter((prev) => ({
            ...prev,
            datePublished: ISort.DESCENDING,
          }));
          setData((prev) =>
            prev.sort(
              (a, b) => Number(b.datePublished) - Number(a.datePublished)
            )
          );
        } else if (sortParameter.datePublished === ISort.DESCENDING) {
          setSortParameter((prev) => ({
            ...prev,
            datePublished: ISort.NEUTRAL,
          }));
          setData(products.slice(takeSkip.skip, takeSkip.skip + takeSkip.take));
        }
        setSortParameter((prev) => ({
          ...prev,
          price: ISort.NEUTRAL,
          product: ISort.NEUTRAL,
        }));
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    setTakeSkip((prev) => ({
      ...prev,
      skip: (pagination.pageNumber - 1) * takeSkip.take,
    }));
  }, [pagination]);

  useEffect(() => {
    const searchParameterMatched = products.filter((data) =>
      data.name.toLowerCase().includes(searchParameter.toLowerCase())
    );
    setData(
      searchParameterMatched.slice(takeSkip.skip, takeSkip.skip + takeSkip.take)
    );
  }, [takeSkip]);

  useEffect(() => {
    setCurrentPage(1);
    const searchParameterMatched = products.filter((data) =>
      data.name.toLowerCase().includes(searchParameter.toLowerCase())
    );
    setData(searchParameterMatched.slice(0, takeSkip.take));
  }, [searchParameter]);

  useEffect(() => setCurrentPage(pagination.pageNumber), [pagination]);

  return (
    <section className="absolute w-full">
      <div className="px-8 py-5">
        <span className="flex items-center text-sm font-medium gap-2">
          <HomeIcon height="15" width="15" />
          {">"} <p>Products</p>
        </span>
        <h1 className="font-bold text-3xl my-1">Products</h1>
        <p className="text-xs text-black/50 mt-5">6000 results</p>
        <div className="flex mt-3 gap-5">
          <div className="relative flex items-center ">
            <img
              className="text-xs absolute opacity-30 w-4 aspect-square ml-3"
              src="/SearchIcon.svg"
              alt="search"
            />
            <input
              onChange={(e) => setSearchParameter(e.target.value)}
              value={searchParameter}
              type="text"
              className="border-[1px] dark:bg-darkSecondaryBg dark:darkBorder rounded-md w-80 h-8 pl-8 focus:outline-none"
              placeholder="Search by product name..."
            />
          </div>
        </div>
        <Link href={"/pages/e-commerce/admin/add-product"}>
          <button className="text-xs mt-4 h-9 rounded-lg w-40 bg-blueish text-white hover:opacity-70">
            Add Product
          </button>
        </Link>
      </div>
      <div className="text-xs overflow-x-auto bg-white dark:darkPrimaryText dark:bg-darkSecondaryBg border-t-[1px] dark:darkBorder px-8">
        <div className="min-w-[55rem]">
          <ul className="flex gap-2 font-semibold py-3 border-b-[1px] text-nowrap">
            <li
              onClick={() => handleSortParameterChanged("product")}
              className="flex-1 min-w-52 flex gap-1 items-center cursor-pointer"
            >
              PRODUCT
              {sortParameter.product === ISort.NEUTRAL ? (
                <SortIconNeutral />
              ) : sortParameter.product === ISort.ASCENDING ? (
                <SortIconAscend />
              ) : (
                <SortIconDescend />
              )}
            </li>
            <li className="flex-1 max-w-32 text-center">CATEGORY</li>
            <li
              onClick={() => handleSortParameterChanged("price")}
              className="flex-1 max-w-16 text-center flex gap-1 items-center cursor-pointer"
            >
              PRICE
              {sortParameter.price === ISort.NEUTRAL ? (
                <SortIconNeutral />
              ) : sortParameter.price === ISort.ASCENDING ? (
                <SortIconAscend />
              ) : (
                <SortIconDescend />
              )}
            </li>
            <li className="flex-1 text-center max-w-40">TAGS</li>
            <li
              onClick={() => handleSortParameterChanged("datePublished")}
              className="flex-1 text-center max-w-28 flex gap-1 items-center cursor-pointer"
            >
              DATE PUBLISHED
              {sortParameter.datePublished === ISort.NEUTRAL ? (
                <SortIconNeutral />
              ) : sortParameter.datePublished === ISort.ASCENDING ? (
                <SortIconAscend />
              ) : (
                <SortIconDescend />
              )}
            </li>
            <li className="flex-1 text-center max-w-28">MANUFACTURER</li>
            <li className="flex-1"></li>
          </ul>
          <ul className="flex flex-col">
            {data.map((itm) => (
              <li
                className="flex gap-2 items-center dark:darkBorder border-b-[1px] mt-5 pb-5"
                key={itm.name}
              >
                <span className="flex items-center gap-2 flex-1 font-semibold cursor-pointer min-w-52">
                  <div className="flex justify-center items-center w-10 h-10">
                    <img src={itm.image} alt="" />
                  </div>
                  <p className="hover:underline text-blue-400 hover:text-blue-500">
                    {itm.name}
                  </p>
                </span>
                <span className={`flex-1 max-w-32 text-center`}>
                  <p>{itm.category}</p>
                </span>
                <span className="flex text-center gap-2 items-center flex-1 hover:underline cursor-pointer font-semibold text-black/50 max-w-16">
                  ${itm.price.toLocaleString()}
                </span>
                <span className="flex-1 flex flex-wrap gap-2 justify-center max-w-40">
                  {itm.tags.map((tag) => (
                    <p className="bg-gray-100 w-fit py-1 px-3 rounded-md">
                      {tag}
                    </p>
                  ))}
                </span>
                <span className="flex-1 max-w-28 text-center">
                  {itm.datePublished}
                </span>
                <span className="flex-1 text-center max-w-28">
                  {itm.manufacturer}
                </span>
                <span className="flex-1 flex justify-around text-blue-400 hover:text-blue-500 underline text-xs font-semibold">
                  <a href="##">view</a>
                  <button>
                    <DeleteIcon height="15" width="15" />
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-1 justify-end py-5 px-8 border-b-[1px] pb-5 mb-16 bg-white">
        {Array.from({ length: pagination.pages }).map((_, idx) => (
          <span
            key={idx}
            className={` cursor-pointer w-6 h-5 flex justify-center items-center rounded-md  ${
              idx + 1 === currentPage && "bg-blueish darkPrimaryText"
            }`}
            onClick={() => {
              setPagination((prev) => ({ ...prev, pageNumber: idx + 1 }));
            }}
          >
            {idx + 1}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Products;
