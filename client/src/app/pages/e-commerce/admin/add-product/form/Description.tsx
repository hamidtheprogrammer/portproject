"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

const Description = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex-1 flex flex-col gap-7 w-full dark:darkPrimaryText">
      <span className="flex flex-col gap-1">
        <label htmlFor="title" className="font-medium">
          Product Title
        </label>
        <input
          {...register("title")}
          type="text"
          className="focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs dark:darkSecondaryText dark:bg-darkSecondaryBg h-9 border-[1px] dark:darkBorder px-2 rounded-md"
          placeholder="Enter product name..."
        />
        {errors.title && (
          <p className="text-red-500 text-sm font-bold">
            {errors.title.message as string}
          </p>
        )}
      </span>
      <span className="flex flex-col gap-1">
        <label htmlFor="title" className="font-medium flex gap-2 items-center">
          Product Description
        </label>
        <textarea
          {...register("description")}
          className="focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs dark:darkSecondaryText dark:bg-darkSecondaryBg h-40 border-[1px] dark:darkBorder p-2  rounded-md"
          placeholder="Enter product name..."
        />
        {errors.description && (
          <p className="text-red-500 text-sm font-bold">
            {errors.description.message as string}
          </p>
        )}
      </span>
    </div>
  );
};

export default Description;
