"use client";
import React, { useRef } from "react";
import { useState } from "react";
import { INav } from ".";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UIContext } from "@/app/context/UI/UIContext";
import { usePathname } from "next/navigation";

interface IAccordion {
  navItems: INav[];
}

const Accordion: React.FC<IAccordion> = ({ navItems }) => {
  const [navItms, setNavItms] = useState(navItems);
  const { isSideBarOpen, setIsSideBarOpen } = useContext(UIContext);

  const contentRef = useRef<HTMLUListElement>(null);

  const pathname = usePathname();

  const router = useRouter();

  const tags = pathname
    .split("/")
    .filter((itm) => itm !== "" && itm !== "pages");

  return (
    <>
      {navItms.map((itm, index) => (
        <li key={itm.title}>
          <div className="relative text-xs pl-4 flex gap-2 dark:hover:bg-slate-800 hover:bg-slate-100 cursor-pointer py-2 rounded-md">
            <div
              onClick={() => {
                if (itm.subItems) {
                  const newNav = navItms.map((nav, idx) => {
                    return idx === index
                      ? { ...nav, isOpen: !nav.isOpen }
                      : nav;
                  });
                  setNavItms(newNav);
                } else {
                  if (isSideBarOpen) setIsSideBarOpen(false);
                  itm.blank
                    ? window.open(`/pages${itm.link}`)
                    : router.push(`/pages${itm.link}`);
                }
              }}
              className="absolute inset-0 h-full w-full z-10"
            ></div>
            {itm.subItems && itm.isOpen ? (
              <img
                src="/ArrowDown.svg"
                className="opacity-60 aspect-square w-[.6rem] mr-2"
                alt="arrowdown"
              />
            ) : (
              itm.subItems &&
              !itm.isOpen && (
                <img
                  src="/ArrowLeft.svg"
                  className="opacity-60 aspect-square w-[.4rem] mr-2"
                  alt="arrowleft"
                />
              )
            )}
            {itm.icon && (
              <img
                src="/DashboardIcon.svg"
                className="opacity-40 w-3"
                alt="Dashboard"
              />
            )}
            <p
              className={` ${
                tags.length > 0 &&
                tags.every((path) => itm.tags.includes(path)) &&
                "text-blue-600"
              }`}
            >
              {itm.title}
            </p>
          </div>
          {itm.subItems && (
            <ul
              ref={contentRef}
              style={{
                height: itm.isOpen ? `auto` : `0px`,
              }}
              className={`flex flex-col pl-4 transition-all duration-300 overflow-hidden`}
            >
              <Accordion navItems={itm.subItems} />
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default Accordion;
