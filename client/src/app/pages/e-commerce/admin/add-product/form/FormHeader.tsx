import React from "react";

const FormHeader = () => {
  return (
    <div className="flex justify-between items-center dark:darkPrimaryText bg-white dark:bg-darkSecondaryBg py-4 border-b-[1px] md:px-8">
      <div className="grid gap-2 grid-cols-[auto_1fr]">
        <button className="row-span-2 shadow-[0_0_4px_rgba(0,0,0,0.1)] h-fit self-center p-3 rounded-md">
          <img src="/ReturnIcon.svg" alt="return" />
        </button>
        <p className="relative top-1 text-xs secondaryText dark:darkSecondaryText">
          Back to list
        </p>
        <h1 className="font-semibold">Add New Product</h1>
      </div>
      <div className="space-x-3">
        <button
          type="button"
          className="border-[1px] rounded-md hover:bg-gray-100 px-3 py-2 dark:darkBorder text-xs"
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
