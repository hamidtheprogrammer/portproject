"use client";
import React, { useEffect, useRef, useState } from "react";
import { IProduct } from "../../products-filtering";
import { StarIcon } from "@/app/svg";
import { IDirection } from "@/app/pages/travel/portfolio/components/Hero";
import { useRouter } from "next/navigation";

const ProductCarousel = ({ products }: { products: IProduct[] }) => {
  const carousel = useRef<HTMLUListElement>(null);
  const [offset, setOffSet] = useState<number>(0);

  function handleCarouselMovement(direction: IDirection) {
    switch (direction) {
      case IDirection.FORWARD:
        setOffSet((prev) => prev + 1);
        break;
      case IDirection.BACKWARD:
        setOffSet((prev) => prev - 1);
        break;
      default:
        break;
    }
  }
  const router = useRouter();

  useEffect(() => {
    function homeSize() {
      setOffSet(0);
    }
    window.addEventListener("resize", homeSize);
    return () => window.removeEventListener("resize", homeSize);
  }, []);

  useEffect(() => {
    // const lastChild = carousel.current?.lastChild;
    // console.log(lastChild.offsetWidth);
    // console.log("lastchild", lastChild.getBoundingClientRect().right);
    // console.log("parent", carousel.current.getBoundingClientRect().right);
  }, [offset]);

  return (
    <div className="relative w-full">
      {offset !== 0 && (
        <button
          onClick={() => handleCarouselMovement(IDirection.FORWARD)}
          className="top-1/2 absolute z-[99] bg-white h-14 w-14 rounded-[999px] border-[1px]"
        >
          {"<"}
        </button>
      )}
      <button
        onClick={() => handleCarouselMovement(IDirection.BACKWARD)}
        className="top-1/2 absolute right-0 z-[99] bg-white h-14 w-14 rounded-[999px] border-[1px]"
      >
        {">"}
      </button>
      <ul
        ref={carousel}
        className="relative mt-4 flex w-full items-center overflow-hidden"
      >
        {products.map((prod, idx) => (
          <li
            onClick={() =>
              router.push("/pages/e-commerce/customer/product-details")
            }
            style={{ transform: `translateX(${offset * 100}%)` }}
            key={prod.title}
            className={`cursor-pointer relative max-sm:w-[calc(100%+1.5rem)] sm:w-[calc(50%+0.75rem)] md:w-[calc(33.333%+0.5rem)] lg:w-[calc(25%+0.375rem)] flex-shrink-0 flex-grow-0 transition-all duration-500 product-itm h-[20rem] ${
              idx !== products.length - 1
            } pr-6`}
          >
            <div className="w-full h-full">
              <div className="border-[1px] rounded-xl h-[60%] flex justify-center items-center">
                <img
                  src={prod.image}
                  alt="product image"
                  className="h-4/5 object-cover"
                />
              </div>
              <h1 className="text-xs font-medium mt-4">{prod.title}</h1>
              <div className="relative flex text-xs gap-5 items-center mt-3">
                <ul className="relative flex">
                  {Array.from({ length: Number(prod.rating) }).map((_, idx) => (
                    <li className="relative" key={idx}>
                      <StarIcon height="15" width="15" />
                    </li>
                  ))}
                  <p className="font-medium">{prod.rating}/5</p>
                </ul>
                <p>{prod.reviews.toLocaleString()} reviews</p>
              </div>
              <p className="pt-5 text-lg font-semibold">
                ${prod.price.toLocaleString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCarousel;
