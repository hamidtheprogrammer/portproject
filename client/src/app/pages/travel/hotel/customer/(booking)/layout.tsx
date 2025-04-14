"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Header from "../home/components/Header";
import Footer from "../home/components/Footer";
import { Check } from "lucide-react";
import { usePathname } from "next/navigation";

const progress = [
  { tag: "checkout", name: "Enter your details" },
  { tag: "payment", name: "Confirm your reservation" },
];

const layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const paths = pathname.split("/");

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    progress.forEach((p, index) => {
      if (paths.includes(p.tag)) {
        setIdx(index);
      } else if (paths.includes("payment-successful")) {
        setIdx(2);
      }
    });
  }, [paths]);

  return (
    <div className="fixed inset-0 overflow-y-scroll bg-white">
      <div className="bg-blue-900">
        <div className="max-w-[1020px] mx-auto px-3">
          <Header />
        </div>
      </div>
      <div className="max-w-[1020px] mx-auto px-3">
        <div className="flex gap-1 text-xs my-4">
          <span className="flex-1 flex gap-1 items-center">
            <div className="bg-blueish rounded-[99px] p-1 text-white">
              <Check size={20} className="text-white text-xs" />
            </div>
            <p className="font-semibold max-md:hidden">Your Selection</p>
            <div className="flex-1 h-[1px] bg-black/60"></div>
          </span>
          {progress.map((p, index) => (
            <span
              className={`${
                index !== progress.length - 1 && "flex-1"
              } flex gap-1 items-center`}
            >
              <div
                className={`${
                  idx < index
                    ? "border-[2px] border-black/50 text-black/50"
                    : "bg-blueish text-white"
                } rounded-[99px] h-8 w-8 flex justify-center items-center font-medium`}
              >
                {idx <= index ? (
                  <p className="text-sm h-5 w-5 flex justify-center">
                    {index + 2}
                  </p>
                ) : (
                  <Check size={20} className="text-white" />
                )}
              </div>
              <p
                className={`${
                  idx < index && " text-black/50"
                } font-semibold max-md:hidden`}
              >
                {p.name}
              </p>
              {index !== progress.length - 1 && (
                <div className="flex-1 h-[1px] bg-black/60"></div>
              )}
            </span>
          ))}
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
