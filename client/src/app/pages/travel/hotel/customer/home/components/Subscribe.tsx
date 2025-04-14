import React from "react";

const Subscribe = () => {
  return (
    <div className="flex max-md:flex-col items-center gap-14 max-sm:px-5 sm:px-[6rem] md:px-[6%] py-20">
      <div>
        <img className="max-h-[15rem]" src="/travel/home.jpg" alt="image" />
      </div>
      <div>
        <h1 className="text-2xl text-blue-950 font-bold">
          Keep in touch with us
        </h1>
        <p className="text-sm text-blue-950/50">Subscribe to our newsletter</p>
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
  );
};

export default Subscribe;
