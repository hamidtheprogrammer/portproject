"use client";
import React, { ReactNode } from "react";
import Header from "./home/components/Header";
import Footer from "./home/components/Footer";
import { usePathname } from "next/navigation";

const layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const paths = pathname.split("/");

  return (
    <div
      id="hamvilla-home"
      className="fixed bg-white inset-0 overflow-y-scroll z-[999] h-full"
    >
      <div
        className={`absolute z-[9] w-full ${
          paths.includes("checkout")
            ? "h-0"
            : paths[paths.length - 1] !== "home"
            ? "h-[60%]"
            : "h-[90%]"
        } `}
      >
        <img
          className="max-h-full w-full object-cover hamvilla_homeBg"
          src="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="z-[99] relative max-w-[1020px] mx-auto px-4">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
