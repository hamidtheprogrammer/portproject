"use client";
import React, { useEffect, useState } from "react";
import { products } from "../../products";
import { DeleteIcon, StarIcon } from "@/app/svg";
import { customerReviews } from "..";
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

const Ratings = () => {
  const [takeSkip, setTakeSkip] = useState({ take: 5, skip: 0, sort: null });
  const [pagination, setPagination] = useState({
    pages: products.length / takeSkip.take,
    pageNumber: 1,
  });
  const [currentPage, setCurrentPage] = useState<number>(pagination.pageNumber);
  const [data, setData] = useState(
    customerReviews.slice(takeSkip.skip, takeSkip.skip + takeSkip.take)
  );

  const [sortParameter, setSortParameter] = useState({
    product: ISort.NEUTRAL,
    rating: ISort.NEUTRAL,
    date: ISort.NEUTRAL,
  });

  function handleSortParameterChanged(sort: string) {
    switch (sort) {
      case "product":
        if (sortParameter.product === ISort.NEUTRAL) {
          setSortParameter((prev) => ({
            ...prev,
            product: ISort.ASCENDING,
          }));

          setData((prev) =>
            prev.sort((a, b) =>
              a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
            )
          );
        } else if (sortParameter.product === ISort.ASCENDING) {
          setSortParameter((prev) => ({
            ...prev,
            product: ISort.DESCENDING,
          }));
          setData((prev) =>
            prev.sort((a, b) =>
              b.name.localeCompare(a.name, undefined, { sensitivity: "base" })
            )
          );
        } else if (sortParameter.product === ISort.DESCENDING) {
          setSortParameter((prev) => ({
            ...prev,
            product: ISort.NEUTRAL,
          }));
          setData(
            customerReviews.slice(takeSkip.skip, takeSkip.skip + takeSkip.take)
          );
        }
        setSortParameter((prev) => ({
          ...prev,
          rating: ISort.NEUTRAL,
          date: ISort.NEUTRAL,
        }));
        break;
      case "rating":
        if (sortParameter.rating === ISort.NEUTRAL) {
          setSortParameter((prev) => ({ ...prev, rating: ISort.ASCENDING }));
          setData((prev) =>
            prev.sort((a, b) => Number(a.rating) - Number(b.rating))
          );
        } else if (sortParameter.rating === ISort.ASCENDING) {
          setSortParameter((prev) => ({ ...prev, rating: ISort.DESCENDING }));
          setData((prev) =>
            prev.sort((a, b) => Number(b.rating) - Number(a.rating))
          );
        } else if (sortParameter.rating === ISort.DESCENDING) {
          setSortParameter((prev) => ({ ...prev, rating: ISort.NEUTRAL }));
          setData(
            customerReviews.slice(takeSkip.skip, takeSkip.skip + takeSkip.take)
          );
        }
        setSortParameter((prev) => ({
          ...prev,
          order: ISort.NEUTRAL,
          datePublished: ISort.NEUTRAL,
        }));
        break;
      case "date":
        if (sortParameter.date === ISort.NEUTRAL) {
          setSortParameter((prev) => ({
            ...prev,
            date: ISort.ASCENDING,
          }));
          setData((prev) =>
            prev.sort((a, b) => Number(a.date) - Number(b.date))
          );
        } else if (sortParameter.date === ISort.ASCENDING) {
          setSortParameter((prev) => ({
            ...prev,
            date: ISort.DESCENDING,
          }));
          setData((prev) =>
            prev.sort((a, b) => Number(b.date) - Number(a.date))
          );
        } else if (sortParameter.date === ISort.DESCENDING) {
          setSortParameter((prev) => ({
            ...prev,
            date: ISort.NEUTRAL,
          }));
          setData(
            customerReviews.slice(takeSkip.skip, takeSkip.skip + takeSkip.take)
          );
        }
        setSortParameter((prev) => ({
          ...prev,
          rating: ISort.NEUTRAL,
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
    setData(
      customerReviews.slice(takeSkip.skip, takeSkip.skip + takeSkip.take)
    );
  }, [takeSkip]);

  useEffect(() => setCurrentPage(pagination.pageNumber), [pagination]);

  return (
    <section className="absolute w-full p-8 max-sm:p-3">
      <h1 className="flex font-semibold text-2xl mb-5">
        Ratings & reviews <p className="font-normal text-black/50">(10)</p>
      </h1>
      <div className="text-xs overflow-x-auto dark:darkPrimaryText dark:bg-darkSecondaryBg border-t-[1px] dark:darkBorder">
        <div className="min-w-[50rem]">
          <ul className="flex gap-2 font-semibold py-3 border-b-[1px]">
            <li
              onClick={() => handleSortParameterChanged("product")}
              className="flex-1 flex gap-1 cursor-pointer"
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
            <li
              onClick={() => handleSortParameterChanged("rating")}
              className="flex-1 text-center justify-center flex gap-1 items-center cursor-pointer"
            >
              RATINGS
              {sortParameter.rating === ISort.NEUTRAL ? (
                <SortIconNeutral />
              ) : sortParameter.rating === ISort.ASCENDING ? (
                <SortIconAscend />
              ) : (
                <SortIconDescend />
              )}
            </li>
            <li className="flex-1 text-center min-w-60">REVIEWS</li>

            <li
              onClick={() => handleSortParameterChanged("date")}
              className="flex-1 text-center flex gap-1 items-center cursor-pointer justify-center"
            >
              DATE PURCHASED
              {sortParameter.date === ISort.NEUTRAL ? (
                <SortIconNeutral />
              ) : sortParameter.date === ISort.ASCENDING ? (
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
                className="flex font-medium gap-2 items-center dark:darkBorder border-b-[1px] mt-5 pb-5 text-black/60"
                key={itm.name}
              >
                <span className={`flex-1 flex justify-center text-blue-400`}>
                  {itm.name}
                </span>
                <span className="flex text-center justify-center gap-2 items-center flex-1 font-semibold text-black/50">
                  <ul className="flex">
                    {Array.from({ length: Number(itm.rating) }).map(
                      (_, idx) => (
                        <li key={idx}>
                          <StarIcon height="15" width="15" />
                        </li>
                      )
                    )}
                    <p className="font-medium ml-1">{itm.rating}/5</p>
                  </ul>
                </span>
                <span className="flex-1 flex flex-wrap gap-2 justify-center min-w-60">
                  {itm.review}
                </span>
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

export default Ratings;
