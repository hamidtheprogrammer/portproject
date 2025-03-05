"use client";
import React, { useEffect, useState } from "react";
import { salesPerRegion } from "../seed";
import Image from "next/image";

const SalesByRegion = () => {
  const [filter, setFilter] = useState({ take: 3, skip: 0 });
  const [pagination, setPagination] = useState({
    pages: Math.ceil(salesPerRegion.length / filter.take),
    pageNumber: 1,
  });
  const [data, setData] = useState(
    salesPerRegion.slice(filter.skip, filter.skip + filter.take)
  );

  useEffect(() => {
    setFilter((prev) => ({
      ...prev,
      skip: (pagination.pageNumber - 1) * filter.take,
    }));
  }, [pagination]);

  useEffect(() => {
    setData(salesPerRegion.slice(filter.skip, filter.skip + filter.take));
  }, [filter]);

  return (
    <div className="flex flex-col justify-between text-xs bg-white dark:darkPrimaryText dark:bg-darkSecondaryBg border-[1px] dark:darkBorder rounded-lg p-6 h-[400px]">
      <div>
        <h1 className="text-xl font-semibold">Sales by region</h1>
        <p>Last 7 days</p>
      </div>
      <div className="scrollBar overflow-auto">
        <ul className="flex font-semibold py-2 border-y-[1px] mt-5">
          <li className="flex-1">Country</li>
          <li className="flex-1">Users</li>
          <li className="flex-1">Sales</li>
        </ul>
        <ul className="flex flex-col">
          {data.map((itm) => (
            <li
              className="flex items-center dark:darkBorder border-b-[1px] mt-5 pb-5"
              key={itm.country}
            >
              <span className="flex gap-2 items-center flex-1 hover:underline cursor-pointer text-blue-800">
                <Image
                  src={itm.image}
                  className="rounded-md border-[1px] dark:darkBorder w-10 h-10 gap-2"
                  alt="product"
                  width={20}
                  height={20}
                />
                {itm.country}
              </span>
              <span className="flex items-center flex-1  cursor-pointer">
                <p className="font-semibold"> {itm.userData.userCount}</p>(
                <p>{itm.userData.userPercentage}%</p>)
              </span>
              <span className="flex-1 flex">
                <p className="font-semibold"> ${itm.revenueData.revenue}</p>
                <p>({itm.revenueData.revenuePercentage}%)</p>
              </span>
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

export default SalesByRegion;
