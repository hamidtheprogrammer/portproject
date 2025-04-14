import { Dot } from "lucide-react";
import React from "react";

const hotelRatings = {
  staff: 9.4,
  facilities: 9.3,
  cleanliness: 9.5,
  comfort: 9.5,
  valueForMoney: 8.7,
  location: 9.3,
  freeWifi: 8.7,
};

const guestReviews = [
  {
    name: "Alice Johnson",
    comment:
      "The hotel was amazing! The staff was incredibly friendly, and the rooms were spotless. I especially loved the breakfast selection.",
  },
  {
    name: "Michael Smith",
    comment:
      "Great location and very comfortable rooms. The only downside was the WiFi speed, but overall, a fantastic stay!",
  },
  {
    name: "Sophia Martinez",
    comment:
      "Beautiful property with excellent facilities. The spa and pool were highlights, and the concierge service was top-notch!",
  },
];

const Reviews = () => {
  const totalRating = Array.from(Object.entries(hotelRatings)).reduce(
    (total, current, idx) => total + current[1],
    0
  );

  const averageRating = totalRating / Object.keys(hotelRatings).length;

  return (
    <section className="mt-10">
      <h1 className="text-xl font-bold">Guest reviews</h1>

      <span className="text-xs flex gap-2 items-center my-8">
        <h1 className="rounded-md rounded-bl-none p-2 bg-blue-700 text-white font-medium">
          {averageRating.toFixed(1)}
        </h1>
        <p className="font-semibold text-sm">Very good</p>
        <Dot /> <p>413 reviews </p>
        <a href="##" className="text-blue-500 hover:underline">
          Read all reviews
        </a>
      </span>
      <div className="flex flex-wrap gap-8 text-xs">
        {Object.entries(hotelRatings).map((rating, idx) => (
          <div className="min-w-[300px] max-sm:min-w-full">
            <span className="flex justify-between">
              <p>{rating[0]}</p>
              <p>{rating[1]}</p>
            </span>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                style={{ width: `${rating[1] * 10}%` }}
                className={`${
                  idx % 2 === 0 ? "bg-blue-800" : "bg-green-800"
                } h-full rounded-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-7">
        <h1 className="font-semibold">Guests commented</h1>
        <ul className="flex gap-6 flex-wrap mt-3 ">
          {guestReviews.map((r) => (
            <li
              className="flex flex-col gap-3 p-4 max-sm:min-w-full border rounded-lg flex-1 min-w-[200px] max-w-[30%]"
              key={r.name}
            >
              <div className="flex items-center gap-2 ">
                <div className="rounded-[99px] bg-blueish w-8 h-8 flex justify-center items-center text-white font-medium">
                  {r.name.slice(0, 1)}
                </div>
                <h1 className="font-semibold">{r.name}</h1>
              </div>
              <p className="text-xs font-light">{r.comment}</p>
            </li>
          ))}
        </ul>
        <button className="bg-blueish  text-white rounded-md h-10 w-fit my-8 px-4 text-xs">
          See all reviews
        </button>
      </div>
    </section>
  );
};

export default Reviews;
