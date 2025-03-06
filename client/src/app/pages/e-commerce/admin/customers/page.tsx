"use client";
import React, { useEffect, useState } from "react";
import { products } from "../products";
import { customers } from ".";
import { DeleteIcon, HomeIcon } from "@/app/svg";
import {
  SortIconAscend,
  SortIconDescend,
  SortIconNeutral,
} from "../products/components/SortIcon";

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
    customers.slice(takeSkip.skip, takeSkip.skip + takeSkip.take)
  );

  const [sortParameter, setSortParameter] = useState({
    customer: ISort.NEUTRAL,
    totalSpent: ISort.NEUTRAL,
    dateJoined: ISort.NEUTRAL,
  });

  function handleSortParameterChanged(sort: string) {
    switch (sort) {
      case "customer":
        if (sortParameter.customer === ISort.NEUTRAL) {
          setSortParameter((prev) => ({ ...prev, customer: ISort.ASCENDING }));
          setData((prev) =>
            prev.sort((a, b) =>
              a.customer.localeCompare(b.customer, undefined, {
                sensitivity: "base",
              })
            )
          );
        } else if (sortParameter.customer === ISort.ASCENDING) {
          setSortParameter((prev) => ({ ...prev, customer: ISort.DESCENDING }));
          setData((prev) =>
            prev
              .sort((a, b) =>
                a.customer.localeCompare(b.customer, undefined, {
                  sensitivity: "base",
                })
              )
              .reverse()
          );
        } else if (sortParameter.customer === ISort.DESCENDING) {
          setSortParameter((prev) => ({ ...prev, customer: ISort.NEUTRAL }));
          setData(
            customers.slice(takeSkip.skip, takeSkip.skip + takeSkip.take)
          );
        }
        setSortParameter((prev) => ({
          ...prev,
          totalSpent: ISort.NEUTRAL,
          datePublished: ISort.NEUTRAL,
        }));
        break;
      case "totalSpent":
        if (sortParameter.totalSpent === ISort.NEUTRAL) {
          setSortParameter((prev) => ({
            ...prev,
            totalSpent: ISort.ASCENDING,
          }));
          setData((prev) => prev.sort((a, b) => a.totalSpent - b.totalSpent));
        } else if (sortParameter.totalSpent === ISort.ASCENDING) {
          setSortParameter((prev) => ({
            ...prev,
            totalSpent: ISort.DESCENDING,
          }));
          setData((prev) => prev.sort((a, b) => b.totalSpent - a.totalSpent));
        } else if (sortParameter.totalSpent === ISort.DESCENDING) {
          setSortParameter((prev) => ({ ...prev, totalSpent: ISort.NEUTRAL }));
          setData(
            customers.slice(takeSkip.skip, takeSkip.skip + takeSkip.take)
          );
        }
        setSortParameter((prev) => ({
          ...prev,
          product: ISort.NEUTRAL,
          dateJoined: ISort.NEUTRAL,
        }));
        break;
      case "dateJoined":
        if (sortParameter.dateJoined === ISort.NEUTRAL) {
          setSortParameter((prev) => ({
            ...prev,
            dateJoined: ISort.ASCENDING,
          }));
          setData((prev) =>
            prev.sort((a, b) =>
              a.dateJoined.localeCompare(b.dateJoined, undefined, {
                sensitivity: "base",
              })
            )
          );
        } else if (sortParameter.dateJoined === ISort.ASCENDING) {
          setSortParameter((prev) => ({
            ...prev,
            dateJoined: ISort.DESCENDING,
          }));
          setData((prev) =>
            prev.sort((a, b) =>
              b.dateJoined.localeCompare(a.dateJoined, undefined, {
                sensitivity: "base",
              })
            )
          );
        } else if (sortParameter.dateJoined === ISort.DESCENDING) {
          setSortParameter((prev) => ({
            ...prev,
            dateJoined: ISort.NEUTRAL,
          }));
          setData(
            customers.slice(takeSkip.skip, takeSkip.skip + takeSkip.take)
          );
        }
        setSortParameter((prev) => ({
          ...prev,
          totalSpent: ISort.NEUTRAL,
          customer: ISort.NEUTRAL,
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
    const searchParameterMatched = customers.filter((data) =>
      data.customer.toLowerCase().includes(searchParameter.toLowerCase())
    );
    setData(
      searchParameterMatched.slice(takeSkip.skip, takeSkip.skip + takeSkip.take)
    );
  }, [takeSkip]);

  useEffect(() => {
    setCurrentPage(1);
    const searchParameterMatched = customers.filter((data) =>
      data.customer.toLowerCase().includes(searchParameter.toLowerCase())
    );
    setData(searchParameterMatched.slice(0, takeSkip.take));
  }, [searchParameter]);

  useEffect(() => setCurrentPage(pagination.pageNumber), [pagination]);

  return (
    <section className="absolute w-full">
      <div className="px-8 py-5">
        <span className="flex items-center text-sm font-medium gap-2">
          <HomeIcon height="15" width="15" />
          {">"} <p>Customers</p>
        </span>
        <h1 className="font-bold text-3xl my-1">Customers</h1>
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
              className="border-[1px] dark:bg-darkSecondaryBg dark:darkBorder rounded-md w-80 h-8 text-xs pl-8 focus:outline-none"
              placeholder="Search by product name..."
            />
          </div>
        </div>
        <button className="text-xs mt-4 h-9 rounded-lg w-40 bg-blueish text-white hover:opacity-70">
          Add Customer
        </button>
      </div>
      <div className="text-xs overflow-x-auto bg-white dark:darkPrimaryText dark:bg-darkSecondaryBg border-t-[1px] dark:darkBorder px-8">
        <div className="min-w-[50rem]">
          <ul className="flex gap-2 font-semibold py-3 border-b-[1px] text-nowrap">
            <li
              onClick={() => handleSortParameterChanged("customer")}
              className="flex-1 flex gap-1 items-center cursor-pointer"
            >
              CUSTOMER
              {sortParameter.customer === ISort.NEUTRAL ? (
                <SortIconNeutral />
              ) : sortParameter.customer === ISort.ASCENDING ? (
                <SortIconAscend />
              ) : (
                <SortIconDescend />
              )}
            </li>
            <li className="flex-1">EMAIL</li>
            <li
              onClick={() => handleSortParameterChanged("totalSpent")}
              className="flex-1 flex gap-1 items-center justify-center cursor-pointer"
            >
              PRICE
              {sortParameter.totalSpent === ISort.NEUTRAL ? (
                <SortIconNeutral />
              ) : sortParameter.totalSpent === ISort.ASCENDING ? (
                <SortIconAscend />
              ) : (
                <SortIconDescend />
              )}
            </li>
            <li className="flex-1">CITY</li>
            <li
              onClick={() => handleSortParameterChanged("dateJoined")}
              className="flex-1 flex gap-1 items-center cursor-pointer"
            >
              DATE JOINED
              {sortParameter.dateJoined === ISort.NEUTRAL ? (
                <SortIconNeutral />
              ) : sortParameter.dateJoined === ISort.ASCENDING ? (
                <SortIconAscend />
              ) : (
                <SortIconDescend />
              )}
            </li>

            <li className="flex-1"></li>
          </ul>
          <ul className="flex flex-col">
            {data.map((itm) => (
              <li
                className="flex gap-2 items-center dark:darkBorder border-b-[1px] mt-5 pb-5"
                key={itm.customer}
              >
                <span className="flex items-center gap-2 flex-1 font-semibold cursor-pointer">
                  <div className="flex justify-center rounded-[999] bg-gray-200 items-center w-10 h-10">
                    {itm.customer.slice(0, 1)}
                  </div>
                  <p>{itm.customer}</p>
                </span>
                <span className={`flex-1`}>
                  <p className="hover:underline text-blue-400 hover:text-blue-500">
                    {itm.email}
                  </p>
                </span>
                <span className="flex justify-center flex-1 font-semibold text-black/50">
                  ${itm.totalSpent.toLocaleString()}
                </span>
                <span className="flex-1">{itm.city}</span>
                <span className="flex-1">{itm.dateJoined}</span>

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
