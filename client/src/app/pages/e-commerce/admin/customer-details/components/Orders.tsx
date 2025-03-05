"use client";
import React, { useEffect, useState } from "react";
import { products } from "../../products";
import { DeleteIcon } from "@/app/svg";
import { orders, orderStatus, PaymentStatus } from "..";
import {
  SortIconAscend,
  SortIconDescend,
  SortIconNeutral,
} from "../../products/components/SortIcon";

enum ISort {
  NEUTRAL = "neutral",
  ASCENDING = "ascending",
  DESCENDING = "descending",
}

const Orders = () => {
  const [takeSkip, setTakeSkip] = useState({ take: 5, skip: 0, sort: null });
  const [pagination, setPagination] = useState({
    pages: products.length / takeSkip.take,
    pageNumber: 1,
  });
  const [currentPage, setCurrentPage] = useState<number>(pagination.pageNumber);
  const [data, setData] = useState(
    orders.slice(takeSkip.skip, takeSkip.skip + takeSkip.take)
  );

  const [sortParameter, setSortParameter] = useState({
    paymentStatus: ISort.NEUTRAL,
    price: ISort.NEUTRAL,
    datePurchased: ISort.NEUTRAL,
  });

  function handleSortParameterChanged(sort: string) {
    switch (sort) {
      case "paymentStatus":
        if (sortParameter.paymentStatus === ISort.NEUTRAL) {
          setSortParameter((prev) => ({
            ...prev,
            paymentStatus: ISort.ASCENDING,
          }));

          setData((prev) =>
            prev.sort(
              (a, b) =>
                orderStatus[a.paymentStatus as PaymentStatus] -
                orderStatus[b.paymentStatus]
            )
          );
        } else if (sortParameter.paymentStatus === ISort.ASCENDING) {
          setSortParameter((prev) => ({
            ...prev,
            paymentStatus: ISort.DESCENDING,
          }));
          setData((prev) =>
            prev
              .sort(
                (a, b) =>
                  orderStatus[a.paymentStatus] - orderStatus[b.paymentStatus]
              )
              .reverse()
          );
        } else if (sortParameter.paymentStatus === ISort.DESCENDING) {
          setSortParameter((prev) => ({
            ...prev,
            paymentStatus: ISort.NEUTRAL,
          }));
          setData(orders.slice(takeSkip.skip, takeSkip.skip + takeSkip.take));
        }
        setSortParameter((prev) => ({
          ...prev,
          price: ISort.NEUTRAL,
          datePurchased: ISort.NEUTRAL,
        }));
        break;
      case "price":
        if (sortParameter.price === ISort.NEUTRAL) {
          setSortParameter((prev) => ({ ...prev, price: ISort.ASCENDING }));
          setData((prev) => prev.sort((a, b) => a.total - b.total));
        } else if (sortParameter.price === ISort.ASCENDING) {
          setSortParameter((prev) => ({ ...prev, price: ISort.DESCENDING }));
          setData((prev) => prev.sort((a, b) => b.total - a.total));
        } else if (sortParameter.price === ISort.DESCENDING) {
          setSortParameter((prev) => ({ ...prev, price: ISort.NEUTRAL }));
          setData(orders.slice(takeSkip.skip, takeSkip.skip + takeSkip.take));
        }
        setSortParameter((prev) => ({
          ...prev,
          order: ISort.NEUTRAL,
          datePublished: ISort.NEUTRAL,
        }));
        break;
      case "datePurchased":
        if (sortParameter.datePurchased === ISort.NEUTRAL) {
          setSortParameter((prev) => ({
            ...prev,
            datePurchased: ISort.ASCENDING,
          }));
          setData((prev) =>
            prev.sort((a, b) =>
              a.date.localeCompare(b.date, undefined, { sensitivity: "base" })
            )
          );
        } else if (sortParameter.datePurchased === ISort.ASCENDING) {
          setSortParameter((prev) => ({
            ...prev,
            datePurchased: ISort.DESCENDING,
          }));
          setData((prev) =>
            prev.sort((a, b) =>
              b.date.localeCompare(a.date, undefined, { sensitivity: "base" })
            )
          );
        } else if (sortParameter.datePurchased === ISort.DESCENDING) {
          setSortParameter((prev) => ({
            ...prev,
            datePurchased: ISort.NEUTRAL,
          }));
          setData(orders.slice(takeSkip.skip, takeSkip.skip + takeSkip.take));
        }
        setSortParameter((prev) => ({
          ...prev,
          price: ISort.NEUTRAL,
          order: ISort.NEUTRAL,
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
    setData(orders.slice(takeSkip.skip, takeSkip.skip + takeSkip.take));
  }, [takeSkip]);

  useEffect(() => setCurrentPage(pagination.pageNumber), [pagination]);

  return (
    <section className="p-8 max-sm:p-3">
      <h1 className="flex font-semibold text-2xl mb-5">
        Orders <p className="font-normal text-black/50">(10)</p>
      </h1>
      <div className="text-xs overflow-x-auto dark:darkPrimaryText dark:bg-darkSecondaryBg border-t-[1px] dark:darkBorder">
        <div className="min-w-[50rem]">
          <ul className="flex gap-2 font-semibold py-3 border-b-[1px]">
            <li
              onClick={() => handleSortParameterChanged("product")}
              className="flex-1 flex gap-1 items-center"
            >
              ID
            </li>
            <li
              onClick={() => handleSortParameterChanged("paymentStatus")}
              className="flex-1 flex gap-1 justify-center text-center cursor-pointer"
            >
              PAYMENT STATUS
              {sortParameter.paymentStatus === ISort.NEUTRAL ? (
                <SortIconNeutral />
              ) : sortParameter.paymentStatus === ISort.ASCENDING ? (
                <SortIconAscend />
              ) : (
                <SortIconDescend />
              )}
            </li>
            <li
              onClick={() => handleSortParameterChanged("price")}
              className="flex-1 text-center justify-center flex gap-1 items-center cursor-pointer"
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
            <li className="flex-1 text-center">DELIVERY</li>
            <li className="flex-1 text-center">ITEM COUNT</li>
            <li
              onClick={() => handleSortParameterChanged("datePurchased")}
              className="flex-1 text-center flex gap-1 items-center cursor-pointer justify-center"
            >
              DATE PURCHASED
              {sortParameter.datePurchased === ISort.NEUTRAL ? (
                <SortIconNeutral />
              ) : sortParameter.datePurchased === ISort.ASCENDING ? (
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
                className="flex gap-2 items-center dark:darkBorder border-b-[1px] mt-5 pb-5 text-black/60"
                key={itm.id}
              >
                <span className="flex items-center gap-2 flex-1 font-semibold cursor-pointer">
                  <p className="hover:underline text-blue-400 hover:text-blue-500">
                    {itm.id}
                  </p>
                </span>
                <span className={`flex-1 flex justify-center text-center`}>
                  <p
                    className={`border-[1px] px-2 py-[0.05rem] text-xs uppercase w-fit rounded-md ${
                      itm.paymentStatus === "Paid"
                        ? "text-green-700 border-green-700 bg-green-100"
                        : itm.paymentStatus === "Pending"
                        ? "text-orange-700 border-orange-700 bg-orange-100"
                        : itm.paymentStatus === "Refunded"
                        ? "text-black/60"
                        : "text-red-700 border-red-700 bg-red-100"
                    }`}
                  >
                    {itm.paymentStatus}
                  </p>
                </span>
                <span className="flex text-center justify-center gap-2 items-center flex-1 hover:underline cursor-pointer font-semibold text-black/50">
                  ${itm.total.toLocaleString()}
                </span>
                <span className="flex-1 flex flex-wrap gap-2 justify-center">
                  {itm.delivery}
                </span>
                <span className="flex-1 text-center">{itm.itemCount}</span>
                <span className="flex-1 text-center">{itm.date}</span>

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
      <div className="flex gap-1 justify-end py-5 px-8 border-b-[1px] pb-5 mb-16">
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

export default Orders;
