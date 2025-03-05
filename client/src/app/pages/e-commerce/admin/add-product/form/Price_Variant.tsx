import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useFieldArray } from "react-hook-form";

const Price_Variant = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { append, fields, remove } = useFieldArray({ name: "variants" });

  useEffect(() => {
    append("");
  }, []);

  return (
    <div className="space-y-7">
      <span className="flex flex-col flex-1 gap-1">
        <label htmlFor="price" className="font-medium dark:darkPrimaryText">
          Price
        </label>
        <div className="relative flex items-center">
          <span className="absolute left-[0.1rem] opacity-50 bg-gray-100 flex justify-center items-center aspect-square h-[90%] rounded-tl-md rounded-bl-md">
            $
          </span>
          <input
            {...register("price")}
            className="pl-9 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs dark:darkSecondaryText dark:bg-darkSecondaryBg  border-[1px] dark:darkBorder p-2  rounded-md"
            type="number"
          />
        </div>
        {errors.price && (
          <p className="text-red-500 text-sm font-bold">
            {errors.price.message as string}
          </p>
        )}
      </span>
      <div className="font-medium">
        <h1 className="dark:darkPrimaryText">Variants</h1>
        <div className="bg-white border-[1px] dark:darkBorder dark:bg-darkSecondaryBg rounded-lg p-3 flex flex-col gap-3">
          {fields.map((field, index) => (
            <span key={index} className="flex flex-col flex-1 gap-1 min-w-60">
              <label
                htmlFor="variant"
                className="text-xs secondaryText dark:darkSecondaryText flex gap-2"
              >
                Option {index + 1}
                <p
                  onClick={() => remove(index)}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  remove
                </p>
              </label>
              <input
                {...register(`variants[${index}]`)}
                className="focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs dark:darkSecondaryText dark:bg-darkSecondaryBg  border-[1px] dark:darkBorder p-2  rounded-md"
                type="text"
              />
              {Array.isArray(errors.variants) && errors.variants[index] && (
                <p className="text-red-500 text-sm font-bold">
                  {errors.variants[index].message as string}
                </p>
              )}
            </span>
          ))}
          <button
            type="button"
            className="bg-blue-500 text-white rounded-md hover:bg-blue-600 px-3 py-2 text-xs"
            onClick={() => append("")}
          >
            Add another option
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price_Variant;
