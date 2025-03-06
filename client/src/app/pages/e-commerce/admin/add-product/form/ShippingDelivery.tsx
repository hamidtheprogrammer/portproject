import React from "react";
import { useFormContext } from "react-hook-form";

const ShippingDelivery = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex gap-2 flex-col ">
      <h1 className="font-medium dark:darkPrimaryText text-black">
        Shipping and delivery
      </h1>
      <div className="flex flex-wrap gap-10 max-sm:flex-col bg-white border-[1px] dark:darkBorder dark:bg-darkSecondaryBg rounded-lg p-3 w-full">
        <span className="flex flex-col flex-1 gap-1 min-w-60">
          <label
            htmlFor="title"
            className="text-xs secondaryText dark:darkSecondaryText text-black"
          >
            Weight
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-[0.1rem] text-black text-xs opacity-50 bg-gray-100 flex justify-center items-center aspect-square h-[90%] rounded-tl-md rounded-bl-md">
              Kg
            </span>
            <input
              {...register("weight")}
              className="pl-9 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 text-black dark:darkSecondaryText dark:bg-darkSecondaryBg  border-[1px] dark:darkBorder p-2  rounded-md"
              type="number"
            />
          </div>
          {errors.weight && (
            <p className="text-red-500 text-sm font-bold">
              {errors.weight.message as string}
            </p>
          )}
        </span>
        <span className="flex flex-col flex-1 gap-1 min-w-60">
          <label
            htmlFor="title"
            className="text-xs secondaryText dark:darkSecondaryText"
          >
            Size
          </label>
          <input
            {...register("size")}
            className="focus:outline-none focus:ring-2 focus:ring-blue-300 text-black dark:darkSecondaryText dark:bg-darkSecondaryBg  border-[1px] dark:darkBorder p-2  rounded-md"
            type="number"
          />
          {errors.size && (
            <p className="text-red-500 text-sm font-bold">
              {errors.size.message as string}
            </p>
          )}
        </span>
        <div className="flex flex-col min-w-60 flex-1 gap-3 font-medium">
          <h1 className="dark:darkPrimaryText text-black">Selling Type</h1>
          <span className="flex gap-1 items-center">
            <input
              {...register("sellingType")}
              className=""
              type="radio"
              name="sellingType"
              value={"in-store"}
            />
            <label
              htmlFor="title"
              className="text-xs secondaryText dark:darkSecondaryText"
            >
              In-store selling only
            </label>
          </span>
          <span className="flex gap-1 items-center">
            <input
              {...register("sellingType")}
              className=""
              type="radio"
              name="sellingType"
              value={"online"}
            />
            <label
              htmlFor="title"
              className="text-xs secondaryText dark:darkSecondaryText"
            >
              Online selling only
            </label>
          </span>
          <span className="flex gap-1 items-center">
            <input
              {...register("sellingType")}
              className=""
              type="radio"
              name="sellingType"
              value={"both"}
            />
            <label
              htmlFor="title"
              className="text-xs secondaryText dark:darkSecondaryText"
            >
              Available both in-store and online
            </label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShippingDelivery;
