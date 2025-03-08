"use client";
import React, { useEffect, useState } from "react";
import { RecentPurchasesData } from "./seed";
import Image from "next/image";
import { products } from "../../e-commerce/admin/products";

const RecentPurchases = () => {
  const [allowFilterChange, setAllowFilterChange] = useState(false);

  const [filter, setFilter] = useState({ take: 5, skip: 0 });
  const [pagination, setPagination] = useState({
    pages: RecentPurchasesData.length / filter.take,
    pageNumber: 1,
  });
  const [searchParameter, setSearchParameter] = useState<string>("");
  const [data, setData] = useState(
    RecentPurchasesData.slice(filter.skip, filter.skip + filter.take)
  );

  useEffect(() => {
    if (!allowFilterChange) return;
    setFilter((prev) => ({
      ...prev,
      skip: (pagination.pageNumber - 1) * filter.take,
    }));
    setAllowFilterChange(false);
  }, [pagination, allowFilterChange]);

  useEffect(() => {
    // setPagination({
    //   pageNumber: 1,
    //   pages: RecentPurchasesData.length / filter.take,
    // });

    const searchParameterMatched = RecentPurchasesData.filter((data) =>
      data.customer.toLowerCase().includes(searchParameter.toLowerCase())
    );
    setData(
      searchParameterMatched.slice(filter.skip, filter.skip + filter.take)
    );
    setData(
      searchParameterMatched.slice(filter.skip, filter.skip + filter.take)
    );
  }, [filter, searchParameter]);

  return (
    <div className="md:col-span-2 text-xs bg-white dark:darkPrimaryText dark:bg-darkSecondaryBg border-[1px] dark:darkBorder rounded-lg p-6">
      <div className="flex max-sm:flex-col max-sm:gap-3 justify-between">
        <h1 className="font-medium text-lg">Recent purchases</h1>
        <div className="relative flex items-center ">
          <img
            className="absolute opacity-30 w-4 aspect-square ml-3"
            src="/SearchIcon.svg"
            alt="search"
          />
          <input
            onChange={(e) => setSearchParameter(e.target.value)}
            value={searchParameter}
            type="text"
            className="border-[1px] dark:bg-darkSecondaryBg dark:darkBorder rounded-md w-80 h-8 sm:text-xs pl-8 focus:outline-none"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="scrollBar overflow-x-auto">
        <ul className="flex font-semibold py-2 border-y-[1px] mt-5 min-w-[40rem]">
          <li className="flex-1">Product</li>
          <li className="w-24">Payment</li>
          <li className="flex-1">Customer</li>
          <li className="flex-1">Amount</li>
        </ul>
        <ul className="flex flex-col min-w-[40rem]">
          {data.map((itm, idx) => (
            <li
              className="flex items-center dark:darkBorder border-b-[1px] mt-5 pb-5"
              key={itm.customer}
            >
              <span className="flex gap-2 items-center flex-1 hover:underline cursor-pointer text-blue-800">
                <Image
                  src={products[idx].image}
                  className="rounded-md border-[1px] dark:darkBorder w-10 h-10 gap-2"
                  alt="product"
                  width={20}
                  height={20}
                />
                {itm.product}
              </span>

              <span className={`w-24 `}>
                <p
                  className={`flex-1 w-fit text-[0.7rem] rounded-full font-medium py-[0.04rem] px-[0.6rem] ${
                    itm.payment === "Pending"
                      ? "bg-red-200 text-red-700 border-[1px] border-red-700"
                      : "bg-green-200 text-green-700 border-[1px] border-green-700"
                  }`}
                >
                  {itm.payment}
                </p>
              </span>
              <span className="flex items-center gap-2 flex-1 font-semibold cursor-pointer">
                <div className="flex justify-center primaryText text-lg items-center rounded-[99px] w-10 h-10 bg-blue-100">
                  {itm.customer.split(" ")[0].substring(0, 1)}
                </div>{" "}
                <p className="hover:underline"> {itm.customer}</p>
              </span>
              <span className="flex-1">${itm.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-1 justify-end mt-5">
        {Array.from({ length: pagination.pages }).map((_, idx) => (
          <span
            key={idx}
            className={`cursor-pointer w-6 h-5 flex justify-center items-center rounded-md  ${
              idx + 1 === pagination.pageNumber &&
              "bg-[#8884d8] darkPrimaryText"
            }`}
            onClick={() => {
              setAllowFilterChange(true),
                setPagination((prev) => ({ ...prev, pageNumber: idx + 1 }));
            }}
          >
            {idx + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecentPurchases;
