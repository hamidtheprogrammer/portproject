import React from "react";
import { detailsInfo, productReviews } from "..";
import { StarIcon } from "@/app/svg";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [filter, setFilter] = useState({ take: 3, skip: 0, sort: null });
  const [pagination, setPagination] = useState({
    pages: Math.ceil(productReviews.length / filter.take),
    pageNumber: 1,
  });
  const [data, setData] = useState(
    productReviews.slice(filter.skip, filter.skip + filter.take)
  );

  useEffect(() => {
    setFilter((prev) => ({
      ...prev,
      skip: (pagination.pageNumber - 1) * filter.take,
    }));
  }, [pagination]);

  useEffect(() => {
    setData(productReviews.slice(filter.skip, filter.skip + filter.take));
  }, [filter]);
  return (
    <div className="mt-5 bg-white rounded-lg border-[1px] p-5">
      <div className="flex gap-8 mb-5 items-center">
        <h1 className="text-xl font-bold flex gap-1">
          {detailsInfo.rating}/5 <StarIcon height="25" width="25" />
        </h1>
        <p className="font-medium">{detailsInfo.reviews} reviews</p>
      </div>
      <hr className="mb-5" />
      <ul className="flex flex-col gap-10">
        {data.map((review) => (
          <li key={review.by} className="flex flex-col gap-1">
            <span className="flex gap-1 mb-3">
              <h1>{review.rating}/5</h1> <StarIcon height="20" width="20" /> by
              <p className="font-medium">{review.by} reviews</p>
            </span>
            <span className="text-xs text-black/75">{review.date}</span>
            <span className="text-sm">{review.review}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-1 justify-end mt-5">
        {Array.from({ length: pagination.pages }).map((_, idx) => (
          <span
            key={idx}
            className={`cursor-pointer w-6 h-5 flex justify-center items-center rounded-md  ${
              idx + 1 === pagination.pageNumber &&
              "bg-[#4039be] darkPrimaryText"
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

export default Reviews;
