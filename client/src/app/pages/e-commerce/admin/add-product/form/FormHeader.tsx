import React from "react";

const FormHeader = () => {
  return (
    <div className="mt-2 flex justify-between items-center dark:darkPrimaryText bg-white dark:bg-darkSecondaryBg h-20 border-b-[1px] md:px-8 px-3">
      <div className="flex gap-1 items-center">
        <button className="row-span-2 shadow-[0_0_4px_rgba(0,0,0,0.1)] h-fit p-3 rounded-md">
          <img src="/ReturnIcon.svg" alt="return" />
        </button>
        <span>
          <p className="relative top-1 text-xs secondaryText dark:darkSecondaryText">
            Back to list
          </p>
          <h1 className="font-semibold text-black max-sm:text-sm">
            Add New Product
          </h1>
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <button
          type="button"
          className="border-[1px] rounded-md hover:bg-gray-100 px-3 py-2 dark:darkBorder text-xs text-black"
        >
          Save to Draft
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md hover:bg-blue-600 px-3 py-2 text-xs"
        >
          Add product
        </button>
      </div>
    </div>
  );
};

export default FormHeader;
