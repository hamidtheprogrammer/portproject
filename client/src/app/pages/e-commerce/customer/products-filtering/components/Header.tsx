"use client";
import {
  BasketIcon,
  BellIcon,
  LocationIcon2,
  MenuIcon,
  UserIcon,
} from "@/app/svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const navList = [
  "Home",
  "Products",
  "Wishlist",
  "Shipping Info",
  "Track order",
  "Checkout",
];

const Header = () => {
  const path = usePathname().split("/");
  const [isLeftNavOpen, setIsLeftBarOpen] = useState<boolean>(false);

  return (
    <header className="dark:darkSecondaryText inset-0 dark:bg-darkSecondaryBg bg-white dark:darkBorder border-b-[1px] flex flex-col gap-3 justify-center md:h-20 lg:h-32 h-32 px-3 sm:px-8">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-6 items-end">
          <div className="flex gap-4">
            <button
              className="lg:hidden"
              onClick={() => setIsLeftBarOpen(true)}
            >
              <MenuIcon height="20" width="20" />
            </button>
            <div className="flex max-sm:h-12 h-14 lg:min-h-20 items-center justify-center aspect-square bg-[#4039be] rounded-[99px]">
              <img src="/logo2.svg" alt="image" className="h-6" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative flex items-center max-md:hidden">
              <img
                className="text-xs absolute opacity-30 w-4 aspect-square ml-3"
                src="/SearchIcon.svg"
                alt="search"
              />
              <input
                type="text"
                className="border-[1px] dark:bg-darkSecondaryBg dark:darkBorder rounded-full w-96 h-8 text-xs pl-8 focus:outline-none"
                placeholder="Search our products..."
              />
            </div>
            <span>
              <ul className="max-lg:hidden flex text-center text-xs gap-5 secondaryText dark:darkSecondaryText">
                {navList.map((li) => (
                  <li
                    className={`relative cursor-pointer pb-1 ${
                      path[path.length - 1].toLowerCase() ===
                        li.toLowerCase() && "underline_button"
                    }`}
                    key={li}
                  >
                    {li}
                  </li>
                ))}
              </ul>
              <div
                className={`${
                  !isLeftNavOpen && "hidden"
                } fixed bg-black/20 z-[999] inset-0`}
              >
                <div className="bg-white w-[18rem] h-full pt-5">
                  <span className="flex justify-between px-4">
                    <h1>LOGO</h1>
                    <button
                      onClick={() => setIsLeftBarOpen(false)}
                      className="flex w-8 h-8 justify-center items-center border-[1px] rounded-[999]"
                    >
                      X
                    </button>
                  </span>
                  <ul
                    className={` mt-10 pl-8 flex flex-col gap-5 text-sm secondaryText dark:darkSecondaryText`}
                  >
                    {navList.map((li) => (
                      <li
                        className={`relative cursor-pointer pb-1 w-fit ${
                          path[path.length - 1].toLowerCase() ===
                            li.toLowerCase() && "underline_button"
                        }`}
                        key={li}
                      >
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <span className="text-xs flex flex-col items-center h-10 gap-1 justify-between">
            <LocationIcon2
              height="20"
              width="20"
              strokeWidth={2}
              color="text-black/70"
            />
            Stores
          </span>
          <Link href={"/pages/e-commerce/customer/cart"}>
            {" "}
            <span className="text-xs flex flex-col items-center h-10 gap-1 justify-between">
              <BasketIcon height="25" width="25" strokeWidth={5} />
              Basket
            </span>
          </Link>
          <span className="text-xs flex flex-col items-center h-10 gap-1 justify-between">
            <UserIcon height="20" width="20" strokeWidth={1} />
            Account
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative flex items-center md:hidden w-full">
          <img
            className="text-xs absolute opacity-30 w-4 aspect-square ml-3"
            src="/SearchIcon.svg"
            alt="search"
          />
          <input
            type="text"
            className="border-[1px] dark:bg-darkSecondaryBg dark:darkBorder rounded-full w-full h-8 text-xs pl-8 focus:outline-none"
            placeholder="Search our products..."
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
