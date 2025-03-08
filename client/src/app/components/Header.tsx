"use client";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ITheme, UIContext } from "../context/UI/UIContext";
import Link from "next/link";
import { MenuIcon } from "../svg";

const Header = () => {
  const { setIsSideBarOpen } = useContext(UIContext);
  const { theme, setTheme } = useContext(UIContext);

  useEffect(() => {
    const getTheme =
      typeof window !== "undefined" && localStorage.getItem("theme");

    if (getTheme) {
      setTheme(getTheme as ITheme);
    } else {
      localStorage.setItem("theme", ITheme.LIGHT);
    }
  }, []);

  useEffect(() => {
    if (theme === ITheme.LIGHT) {
      document.documentElement.classList.remove(ITheme.DARK);
      document.documentElement.classList.add(ITheme.LIGHT);
    } else {
      document.documentElement.classList.remove(ITheme.LIGHT);

      document.documentElement.classList.add(ITheme.DARK);
    }
  }, [theme]);

  return (
    <header className="fixed z-[999] dark:darkSecondaryText inset-0 h-[10%] dark:bg-darkSecondaryBg bg-white dark:darkBorder border-b-[1px] flex justify-between items-center max-sm:px-3 px-8">
      <div className="h-full flex gap-4 items-center">
        <div
          onClick={() => {
            setIsSideBarOpen((prev: boolean) => !prev);
          }}
          className="lg:hidden cursor-pointer"
        >
          <MenuIcon height="24" width="24" />
        </div>
        <Link href={"/"}>
          <img
            className="cursor-pointer flex-grow-0 max-h-[3rem]"
            src="/Logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="relative flex items-center max-md:hidden">
        <img
          className="text-xs absolute opacity-30 w-4 aspect-square ml-3"
          src="/SearchIcon.svg"
          alt="search"
        />
        <input
          type="text"
          className="border-[1px] dark:bg-darkSecondaryBg dark:darkBorder rounded-full w-96 h-8 md:text-xs pl-8 focus:outline-none"
          placeholder="Search..."
        />
      </div>
      <div className="flex gap-5">
        <img
          className="opacity-70 w-5 aspect-square cursor-pointer hover:scale-110 md:hidden"
          src="/SearchIcon.svg"
          alt="search"
        />
        {theme === ITheme.LIGHT ? (
          <img
            onClick={() => {
              setTheme(ITheme.DARK), localStorage.setItem("theme", ITheme.DARK);
            }}
            src="/SunIcon.svg"
            alt="sun"
            className="cursor-pointer hover:scale-110"
          />
        ) : (
          <img
            onClick={() => {
              setTheme(ITheme.LIGHT),
                localStorage.setItem("theme", ITheme.LIGHT);
            }}
            src="/MoonIcon.svg"
            alt="moon"
            className="cursor-pointer hover:scale-110"
          />
        )}
        <img
          src="/BellIcon.svg"
          alt="bell"
          className="cursor-pointer hover:scale-110 opacity-80"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWR8ZW58MHx8MHx8fDA%3D"
          alt="avatar"
          className="aspect-square w-10 object-cover rounded-[999px]"
        />
      </div>
    </header>
  );
};

export default Header;
