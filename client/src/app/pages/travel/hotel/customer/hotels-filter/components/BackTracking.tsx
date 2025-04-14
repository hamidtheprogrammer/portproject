import React from "react";
import { DropDownIcon } from "@/app/svg";

const BackTracking = ({ hotel }: { hotel?: string }) => {
  return (
    <div className="text-xs text-blueish/70  flex items-center gap-1 my-5">
      <a href="#" className="hover:underline">
        Home
      </a>
      <DropDownIcon
        width="15"
        height="15"
        color="text-black rotate-90"
        strokeWidth={0.6}
      />
      <a href="#" className="hover:underline">
        United Kingdom
      </a>
      <DropDownIcon
        width="15"
        height="15"
        color="text-black rotate-90"
        strokeWidth={0.6}
      />
      <a href="#" className="hover:underline">
        London
      </a>
      {hotel ? (
        <>
          <DropDownIcon
            width="15"
            height="15"
            color="text-black rotate-90"
            strokeWidth={0.6}
          />
          <p className="text-black">{hotel}</p>
        </>
      ) : (
        <>
          <DropDownIcon
            width="15"
            height="15"
            color="text-black rotate-90"
            strokeWidth={0.6}
          />
          <p className="text-black">Search results</p>
        </>
      )}
    </div>
  );
};

export default BackTracking;
