"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useFieldArray } from "react-hook-form";

const ProductImage = () => {
  const { watch } = useFormContext();

  const { append, remove } = useFieldArray({ name: "images" });

  const [previews, setPreviews] = useState<string[]>([]);
  const watchAll = watch();

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      fileArray.map((file) => {
        append(file);
        const reader = new FileReader();
        reader.onloadend = () =>
          setPreviews((prev) => [...prev, reader.result as string]);
        reader.readAsDataURL(file as Blob);
      });
    }
  }

  return (
    <div className="md:w-72 h-fit pb-10 bg-white dark:darkPrimaryText dark:bg-darkSecondaryBg border-[1px] dark:darkBorder rounded-lg">
      <div className="text-sm font-medium py-2 px-3 border-b-[1px] dark:darkBorder">
        Product Image
      </div>
      <div className="p-3 flex flex-col">
        <label htmlFor="images" className="text-xs mb-4">
          Images
        </label>
        {watchAll.images.length < 2 && (
          <span className="relative flex flex-col gap-1 justify-center items-center w-full h-40 border-[1px] border-dashed mt-3 rounded-lg">
            <input
              onChange={handleFileChange}
              className="absolute w-full h-full cursor-pointer opacity-0"
              type="file"
              multiple
              accept="image/*"
            />
            <Image
              className="aspect-square w-10"
              src={"/AddImage.svg"}
              width={20}
              height={20}
              alt="image"
            />
            <p className="text-[0.7rem] text-blue-300 font-medium underline">
              {watchAll.images.length > 0
                ? "Add another image"
                : "Click to upload"}
            </p>
          </span>
        )}
        {previews.length > 0 &&
          previews.map((preview, idx) => (
            <div key={idx} className="flex">
              <Image
                className="aspect-square w-20"
                src={preview}
                width={20}
                height={20}
                alt="image"
              />
              <button
                type="button"
                className=" text-blue-500 underline hover:opacity-50 text-xs"
                onClick={() => {
                  remove(idx);
                  setPreviews((prev) =>
                    prev.filter((_, index) => idx !== index)
                  );
                }}
              >
                remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductImage;
