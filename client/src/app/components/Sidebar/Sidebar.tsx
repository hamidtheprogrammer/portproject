"use client";
import React from "react";
import { navItems } from ".";
import Accordion from "./Accordion";
import { useContext } from "react";
import { UIContext } from "@/app/context/UI/UIContext";

const Sidebar = () => {
  const { isSideBarOpen } = useContext(UIContext);

  return (
    <>
      <section className="fixed dark:darkSecondaryText overflow-y-auto dark:darkBorder secondaryText text-xs px-4 pt-8 left-0 bottom-0 h-[90%] w-[15.5rem] dark:bg-darkSecondaryBg bg-white border-r-[1px] max-lg:hidden">
        <h1 className="mb-4">Pages</h1>
        <ul className="flex flex-col gap-2 ">
          <Accordion navItems={navItems} />
        </ul>
      </section>
      <section
        className={`z-[999] fixed secondaryText dark:bg-darkSecondaryBg dark:darkSecondaryText text-xs px-4 left-0 top-[10%] overflow-hidden w-full ${
          isSideBarOpen ? "h-[90%]" : "h-0"
        } bg-white  border-r-[1px] lg:hidden transition-all duration-300`}
      >
        <h1 className="my-4">Pages</h1>
        <ul className="flex flex-col gap-2">
          <Accordion navItems={navItems} />
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
