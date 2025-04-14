"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHamburger } from "react-icons/fa";

const navItems = [
  { name: "Stays", link: "hotels-filter" },
  // { name: "FLights", link: "flights" },
  // { name: "Trip", link: "trip" },
];

const Header = () => {
  const pathname = usePathname();

  const paths = pathname.split("/");

  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  return (
    <div
      className={`${
        paths.includes("checkout") ||
        paths.includes("payment") ||
        paths.includes("payment-successful")
          ? "h-20"
          : "h-32"
      }  flex flex-col gap-7 justify-center text-white`}
    >
      <span className="flex justify-between">
        <Link
          href={"/pages/travel/hotel/customer/home"}
          className="flex items-center"
        >
          <h1 className="font-semibold text-2xl">HAMVILLA</h1>
        </Link>
        <div className="space-x-3">
          <button className="max-sm:hidden text-blueish font-medium bg-white rounded-md h-10 px-4 text-xs">
            Sign in
          </button>
          <button className="max-sm:hidden text-blueish font-medium bg-white rounded-md h-10 px-4 text-xs">
            Register
          </button>
          <div className="relative sm:hidden cursor-pointer">
            <FaHamburger
              size={28}
              onClick={() => setIsDropDownOpen((prev) => !prev)}
            />
            {isDropDownOpen && (
              <span className="absolute w-32 h-32 bg-white text-black right-0 menu-bobble flex flex-col pt-3 px-3">
                <button className="text-black/60 font-medium bg-white rounded-md w-full flex justify-center text-sm h-6 hover:bg-blueish/10">
                  Sign in
                </button>
                <button className="text-black/60 font-medium bg-white rounded-md w-full flex justify-center text-sm h-6 hover:bg-blueish/10">
                  Register
                </button>
              </span>
            )}
          </div>
        </div>
      </span>
      <ul
        className={`${
          paths.includes("checkout") ||
          paths.includes("payment") ||
          paths.includes("payment-successful")
            ? "hidden"
            : ""
        } flex justify-center gap-10`}
      >
        {navItems.map((itm) => (
          <li
            className={`${
              paths[paths.length - 1] === itm.link && "border-b-[3px]"
            } font-bold border-white`}
            key={itm.name}
          >
            <Link href={`/pages/travel/hotel/customer/${itm.link}`}>
              {itm.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
