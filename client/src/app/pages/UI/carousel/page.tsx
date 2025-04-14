"use client";
import React, { useEffect, useState } from "react";

const items = [
  { id: 1, color: "bg-red-400" },
  { id: 2, color: "bg-blue-400" },
  { id: 3, color: "bg-green-400" },
  { id: 4, color: "bg-yellow-400" },
  { id: 5, color: "bg-purple-400" },
  { id: 6, color: "bg-slate-400" },
  { id: 7, color: "bg-black" },
  { id: 8, color: "bg-purple-100" },
  { id: 9, color: "bg-red-200" },
];

const Carousel = () => {
  const [offset, setoffset] = useState<number>(0);
  const itemCount = items.length;
  const visibleCount = 3; // for example
  const maxOffset = itemCount - visibleCount;

  const handlePrev = () => {
    if (offset === 0) return;
    setoffset((prev) => prev - 1);
  };

  const handleNext = () => {
    if (maxOffset === offset) return;
    setoffset((prev) => prev + 1);
  };

  useEffect(() => console.log(offset), [offset]);
  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-x-hidden absolute w-full">
      <ul className="flex flex-row w-full">
        {items.map((i, idx) => (
          <li
            style={{
              transform: `translateX(-${offset * 100}%)`,
            }}
            key={i.id}
            className={`h-[400px] pr-2  md:w-[calc(25%+0.375rem)] max-md:w-[calc(33.3333%+0.5rem)]  transition-all duration-500 flex-shrink-0`}
          >
            <div className={`h-full ${i.color}`}></div>
          </li>
        ))}
      </ul>
      {/* Navigation */}
      <button
        disabled={offset === 0}
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-20"
      >
        ◀
      </button>
      <button
        disabled={offset === items.length - Math.floor(items.length / 2)}
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-20"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
