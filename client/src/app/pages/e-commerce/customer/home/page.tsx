import React from "react";
import Header from "../products-filtering/components/Header";
import ProductCarousel from "./components/ProductCarousel";
import { productsSeed } from "../products-filtering";
import Footer from "../products-filtering/components/Footer";

const page = () => {
  return (
    <section className="fixed inset-0 z-[999] bg-primaryBg overflow-y-auto">
      <Header />
      <div className="px-10 py-8 max-lg:px-7 max-lg:py-5 max-sm:px-5 max-sm:py-3 mb-16">
        <div className="grid grid-cols-4 grid-rows-2 gap-3 min-h-[36rem] max-lg:grid-rows-4 max-lg:min-h-[60rem] max-sm:min-h-[80rem] max-sm:grid-rows-6 py-3">
          <span className="relative flex flex-col space-y-4 justify-center pl-[8%] rounded-xl max-lg:col-span-4 col-span-2 row-span-2 bg-[#FBE3D7]">
            <h1 className="text-2xl font-semibold z-[2] max-w-[70%]">
              Get 50% off on eligible items
            </h1>
            <p className="text-sm text-black/50 z-[2] max-w-[70%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
              aut! Laboriosam, blanditiis sit, perferendis repellendus
              obcaecati.
            </p>
            <button className="underline_button relative w-fit font-medium z-[2]">
              SHOP NOW
            </button>
            <img
              src="/SonyhpBanner.png"
              alt="Banner image"
              className="absolute max-w-[70%] object-cover right-0"
            />
          </span>
          <span className="relative flex flex-col justify-center pl-[8%] rounded-xl bg-[#BDE3D8] max-lg:col-span-2 max-sm:col-span-4">
            <h1 className="text-2xl font-semibold z-[2] max-w-[70%]">Gaming</h1>
            <p className="text-sm text-black/50 z-[2] max-w-[70%]">150 items</p>
            <button className="underline_button mt-2 relative w-fit font-medium z-[2]">
              SHOP NOW
            </button>
            <img
              src="/Ps5Banner.png"
              alt="Banner image"
              className="absolute max-w-[60%] max-h-[90%] right-0"
            />
          </span>
          <span className="relative flex flex-col justify-center pl-[8%] rounded-xl bg-[#D4D4EE] max-lg:col-span-2 max-sm:col-span-4">
            <h1 className="text-2xl font-semibold z-[2] max-w-[50%]">
              Iphone 14 pro
            </h1>
            <p className="text-sm text-black/50 z-[2] max-w-[70%]">Oh so pro</p>
            <button className="underline_button mt-2 relative w-fit font-medium z-[2]">
              SHOP NOW
            </button>
            <img
              src="/Iphone14Banner.png"
              alt="Banner image"
              className="absolute max-w-[60%] max-h-[90%] object-cover right-0"
            />
          </span>
          <span className="relative flex flex-col justify-center pl-[8%] rounded-xl bg-[#FCDCE1] max-lg:col-span-2 max-sm:col-span-4">
            <h1 className="text-2xl font-semibold z-[2] max-w-[50%]">
              50% off Gift items
            </h1>
            <p className="text-sm text-black/50 z-[2] max-w-[70%]">wow!</p>
            <button className="underline_button mt-2 relative w-fit font-medium z-[2]">
              SHOP NOW
            </button>
            <img
              src="/GiftBanner.png"
              alt="Banner image"
              className="absolute max-w-[60%] max-h-[90%] object-cover right-0"
            />
          </span>
          <span className="relative flex flex-col justify-center pl-[8%] rounded-xl bg-[#CCE3F5] max-lg:col-span-2 max-sm:col-span-4">
            <h1 className="text-2xl font-semibold z-[2] max-w-[50%]">
              Home essentials
            </h1>
            <p className="text-sm text-black/50 z-[2] max-w-[70%]">350 items</p>
            <button className="underline_button mt-2 relative w-fit font-medium z-[2]">
              SHOP NOW
            </button>
            <img
              src="/WashingMBanner.png"
              alt="Banner image"
              className="absolute max-w-[60%] max-h-[90%] object-cover right-0"
            />
          </span>
        </div>
        <div className="mt-10">
          <span className="flex justify-between">
            <h1 className="underline_heading relative w-fit pb-3 text-2xl font-medium">
              Top deals
            </h1>
            <p className="text-blue-500 font-medium hover:underline cursor-pointer">
              Explore {">"}
            </p>
          </span>
          <ProductCarousel products={productsSeed} />
        </div>
        <div className="mt-10">
          <span className="flex justify-between">
            <h1 className="underline_heading relative w-fit pb-3 text-2xl font-medium">
              Best Offers
            </h1>
            <p className="text-blue-500 font-medium hover:underline cursor-pointer">
              Explore {">"}
            </p>
          </span>
          <ProductCarousel products={[...productsSeed.reverse()]} />
        </div>
        <div className="mt-10">
          <span className="flex justify-between">
            <h1 className="underline_heading relative w-fit pb-3 text-2xl font-medium">
              Popular
            </h1>
            <p className="text-blue-500 font-medium hover:underline cursor-pointer">
              Explore {">"}
            </p>
          </span>
          <ProductCarousel products={[...productsSeed.reverse()]} />
        </div>
      </div>
      <div className="flex max-md:flex-col mb-16 justify-center items-center gap-14 max-sm:px-5 sm:px-[6rem] md:px-[6%]">
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
      <Footer />
    </section>
  );
};

export default page;
