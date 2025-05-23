import React from "react";
import Header from "../products-filtering/components/Header";
import ProductCarousel from "./components/ProductCarousel";
import { productsSeed } from "../products-filtering";
import Footer from "../products-filtering/components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <section className="fixed inset-0 z-[999] bg-primaryBg overflow-y-auto">
      <Header />
      <div className="px-8 py-8 max-lg:px-7 max-lg:py-5 max-sm:px-3 max-sm:py-3 mb-16">
        <div className="grid grid-cols-4 grid-rows-2 gap-3 min-h-[36rem] max-lg:grid-rows-4 max-lg:min-h-[60rem] max-sm:min-h-[80rem] max-sm:grid-rows-6 py-3">
          <span className="relative flex flex-col space-y-4 justify-center pl-[8%] rounded-xl max-lg:col-span-4 col-span-2 row-span-2 bg-[#FBE3D7]">
            <img
              className="opacity-40 absolute inset-0 h-full w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1637611331620-51149c7ceb94?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h1 className="text-2xl font-semibold z-[2] max-w-[70%]">
              Get 50% off on eligible items
            </h1>
            <p className="text-sm text-black/50 z-[2] max-w-[70%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
              aut! Laboriosam, blanditiis sit, perferendis repellendus
              obcaecati.
            </p>
            <Link
              href={"/pages/e-commerce/customer/products-filtering"}
              className="underline_button relative w-fit font-medium z-[2]"
            >
              SHOP NOW
            </Link>
            <img
              src="/SonyhpBanner.png"
              alt="Banner image"
              className="absolute max-w-[70%] object-cover right-0"
            />
          </span>
          <span className="relative flex flex-col justify-center pl-[8%] rounded-xl bg-[#BDE3D8] max-lg:col-span-2 max-sm:col-span-4">
            <img
              className="opacity-60 absolute inset-0 h-full w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h1 className="text-2xl font-semibold z-[2] max-w-[70%]">Gaming</h1>
            <p className="text-sm text-black/50 z-[2] max-w-[70%]">150 items</p>
            <Link
              href={"/pages/e-commerce/customer/products-filtering"}
              className="underline_button relative w-fit font-medium z-[2]"
            >
              SHOP NOW
            </Link>
            <img
              src="/Ps5Banner.png"
              alt="Banner image"
              className="absolute max-w-[60%] max-h-[90%] right-0"
            />
          </span>
          <span className="relative flex flex-col justify-center pl-[8%] rounded-xl bg-[#D4D4EE] max-lg:col-span-2 max-sm:col-span-4">
            <img
              className="opacity-40 absolute inset-0 h-full w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1557683304-673a23048d34?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h1 className="text-2xl font-semibold z-[2] max-w-[50%]">
              Iphone 14 pro
            </h1>
            <p className="text-sm text-black/50 z-[2] max-w-[70%]">Oh so pro</p>
            <Link
              href={"/pages/e-commerce/customer/products-filtering"}
              className="underline_button relative w-fit font-medium z-[2]"
            >
              SHOP NOW
            </Link>
            <img
              src="/Iphone14Banner.png"
              alt="Banner image"
              className="absolute max-w-[60%] max-h-[90%] object-cover right-0"
            />
          </span>
          <span className="relative flex flex-col justify-center pl-[8%] rounded-xl bg-[#FCDCE1] max-lg:col-span-2 max-sm:col-span-4">
            <img
              className="opacity-40 absolute inset-0 h-full w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1516617442634-75371039cb3a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h1 className="text-2xl font-semibold z-[2] max-w-[50%]">
              50% off Gift items
            </h1>
            <p className="text-sm text-black/50 z-[2] max-w-[70%]">wow!</p>
            <Link
              href={"/pages/e-commerce/customer/products-filtering"}
              className="underline_button relative w-fit font-medium z-[2]"
            >
              SHOP NOW
            </Link>
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
            <Link
              href={"/pages/e-commerce/customer/products-filtering"}
              className="underline_button relative w-fit font-medium z-[2]"
            >
              SHOP NOW
            </Link>
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
            <Link href={"/pages/e-commerce/customer/products-filtering"}>
              <p className="text-blue-500 font-medium hover:underline cursor-pointer">
                Explore {">"}
              </p>
            </Link>
          </span>
          <ProductCarousel products={productsSeed} />
        </div>
        <div className="mt-10">
          <span className="flex justify-between">
            <h1 className="underline_heading relative w-fit pb-3 text-2xl font-medium">
              Best Offers
            </h1>
            <Link href={"/pages/e-commerce/customer/products-filtering"}>
              <p className="text-blue-500 font-medium hover:underline cursor-pointer">
                Explore {">"}
              </p>
            </Link>
          </span>
          <ProductCarousel products={[...productsSeed.reverse()]} />
        </div>
        <div className="mt-10">
          <span className="flex justify-between">
            <h1 className="underline_heading relative w-fit pb-3 text-2xl font-medium">
              Popular
            </h1>
            <Link href={"/pages/e-commerce/customer/products-filtering"}>
              <p className="text-blue-500 font-medium hover:underline cursor-pointer">
                Explore {">"}
              </p>
            </Link>
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
