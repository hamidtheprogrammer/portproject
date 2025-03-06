"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

export const categories = [
  "Men's Clothing",
  "Women's Clothing",
  "Electronics",
  "Home Appliances",
  "Footwear",
  "Watches & Accessories",
  "Beauty & Personal Care",
  "Sports & Outdoors",
  "Toys & Games",
  "Automotive",
];

const CategoryInventory = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex gap-10 max-sm:flex-col">
      <span className="flex flex-col flex-1 gap-1">
        <label
          htmlFor="category"
          className="dark:darkPrimaryText text-black font-medium"
        >
          Category
        </label>
        <select
          {...register("category")}
          className="focus:outline-none focus:ring-2 focus:ring-blue-300 text-black dark:darkSecondaryText dark:bg-darkSecondaryBg  border-[1px] dark:darkBorder p-2  rounded-md"
        >
          <option value="">category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm font-bold">
            {errors.category.message as string}
          </p>
        )}
      </span>
      <span className="flex flex-col flex-1 gap-1">
        <label
          htmlFor="quantity"
          className="dark:darkPrimaryText font-medium text-black"
        >
          Quantity
        </label>
        <input
          {...register("quantity")}
          className="focus:outline-none focus:ring-2 focus:ring-blue-300 text-black dark:darkSecondaryText dark:bg-darkSecondaryBg  border-[1px] dark:darkBorder p-2  rounded-md"
          type="number"
        />
        {errors.quantity && (
          <p className="text-red-500 text-sm font-bold">
            {errors.quantity.message as string}
          </p>
        )}
      </span>
    </div>
  );
};

export default CategoryInventory;
