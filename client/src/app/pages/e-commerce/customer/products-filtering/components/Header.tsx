"use client";
import { BasketIcon, BellIcon, UserIcon } from "@/app/svg";
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
    <header className="dark:darkSecondaryText inset-0 dark:bg-darkSecondaryBg bg-white dark:darkBorder border-b-[1px] flex justify-between items-center py-5 px-8">
      <div className="flex gap-4">
        <button className="lg:hidden" onClick={() => setIsLeftBarOpen(true)}>
          Menu
        </button>
        <button>LOGO</button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span>
          <ul className="max-lg:hidden flex text-center gap-5 text-sm secondaryText dark:darkSecondaryText">
            {navList.map((li) => (
              <li
                className={`relative cursor-pointer pb-1 ${
                  path[path.length - 1].toLowerCase() === li.toLowerCase() &&
                  "underline_button"
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
      <div className="flex gap-5 items-center">
        <BellIcon height="20" width="20" strokeWidth={1} />
        <BasketIcon height="20" width="20" strokeWidth={1} />
        <UserIcon height="20" width="20" strokeWidth={1} />
      </div>
    </header>
  );
};

export default Header;
