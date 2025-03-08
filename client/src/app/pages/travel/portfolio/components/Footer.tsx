import React from "react";

const Footer = () => {
  return (
    <section className="relative pt-4 lg:pt-6 max-md:w-full w-[calc(100%-5rem)]  md:left-20">
      <div className="flex max-md:flex-col items-center gap-14 max-sm:px-5 sm:px-[6rem] md:px-[6%]">
        <div>
          <img
            className="max-h-[15rem]"
            src="/lottie/ManSitting.png"
            alt="image"
          />
        </div>
        <div>
          <h1 className="text-2xl text-blue-950 font-bold">
            Keep in touch with us
          </h1>
          <p className="text-sm text-blue-950/50">
            Subscribe to our newsletter
          </p>
          <span className="flex max-sm:flex-col gap-4 mt-6">
            <input
              className="border-[1px] rounded-md max-sm:w-full h-8 w-72 pl-6 text-xs outline-none"
              placeholder="Email"
              type="text"
            />
            <button className="bg-blueish h-8 flex items-center justify-center max-sm:w-full text-white rounded-md px-8 text-xs">
              Subscribe
            </button>
          </span>
        </div>
      </div>
      <div className="mt-14 border-t-[1px] max-sm:h-20 h-40 max-sm:px-5 sm:px-[6rem] md:px-[6%] flex justify-between items-center w-full">
        <p className="text-blue-950 text-[0.65rem] tracking-[0.16rem]">
          THIS DESIGN WAS INSPIRED BY
          <a
            href="https://webflow.com/@tycreated"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-500"
          >
            @tycreated
          </a>
        </p>
        <h1 className="font-semibold text-2xl">HAMVILLA</h1>
      </div>
    </section>
  );
};

export default Footer;
