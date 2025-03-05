"use client";
import { HomeIcon } from "@/app/svg";
import React, { useState } from "react";
import Overview from "./components/Overview";
import Orders from "./components/Orders";
import Ratings from "./components/Ratings";

const nav = ["Overview", "Orders", "Ratings & reviews"];

const page = () => {
  const [currentModal, setCurrentModal] = useState<string>("Overview");
  return (
    <section>
      <div className="flex flex-col gap-5 pt-5 px-8 max-sm:px-3 bg-white">
        <span className="flex items-center text-sm font-medium gap-2">
          <HomeIcon height="15" width="15" />
          {">"}{" "}
          <p className="text-blueish hover:text-blue-500 cursor-pointer hover:underline">
            Customers
          </p>{" "}
          {">"} <p>John Doe</p>
        </span>
        <span className="flex gap-3 items-center">
          <button className="shadow-[0_0_4px_rgba(0,0,0,0.1)] p-3 rounded-md">
            <img src="/ReturnIcon.svg" alt="return" />
          </button>
          <h1 className="text-2xl font-semibold">Customer Detail</h1>
        </span>
        <span className="flex gap-3 items-center">
          <ul className={`flex gap-5 text-sm font-medium w-full`}>
            {nav.map((n) => (
              <li
                onClick={() => setCurrentModal(n)}
                className={`cursor-pointer text-xs text-black/50 pb-3 text-nowrap ${
                  currentModal === n &&
                  "text-blueish border-blueish border-b-[2px]"
                }`}
                key={n}
              >
                {n}
              </li>
            ))}
          </ul>
        </span>
      </div>
      {currentModal === nav[0] ? (
        <Overview />
      ) : currentModal === nav[1] ? (
        <Orders />
      ) : (
        currentModal === nav[2] && <Ratings />
      )}
    </section>
  );
};

export default page;
