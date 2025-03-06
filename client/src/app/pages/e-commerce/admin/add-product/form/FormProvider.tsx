"use client";
import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ProductImage from "./Image";

import Description from "./Description";
import CategoryInventory, { categories } from "./CategoryInventory";
import ShippingDelivery from "./ShippingDelivery";
import Price_Variant from "./Price_Variant";
import FormHeader from "./FormHeader";

const productSchema = z.object({
  title: z.string().min(1, "Field required"),
  description: z.string().min(20, "Field required"),
  images: z.array(z.instanceof(File)),
  price: z.coerce.number().min(0, "Price must be a positive number"),
  variants: z
    .array(z.string().min(8, { message: "Field required or remove" }))
    .optional(),
  category: z.custom(
    (data) => {
      return categories.includes(data);
    },
    { message: "Field required" }
  ),
  quantity: z.coerce.number().min(1, "Quantity must be more than 1"),
  weight: z.coerce.number().min(0.1, "Weight cannot be 0"),
  size: z.coerce.number().min(1, "Size must be more than 1"),
  sellingType: z.string({ message: "Field is required" }),
});

const Provider = () => {
  const methods = useForm({
    defaultValues: {
      title: "",
      description: "",
      images: [],
      price: 0,
      variants: [],
      category: "",
      quantity: 0,
      weight: 0,
      size: 0,
      sellingType: "in-store",
    },
    resolver: zodResolver(productSchema),
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;

  function submit(data: z.infer<typeof productSchema>) {
    console.log(data);
  }
  const watchAll = watch();
  //   useEffect(() => {
  //     console.log(watchAll);
  //   }, [watchAll]);
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)} action="">
        <FormHeader />
        <div className="px-2 md:px-8 py-5 flex gap-8 max-md:flex-col">
          <div className="space-y-5">
            <ProductImage />
            <Price_Variant />
          </div>
          <div className="flex-1 flex flex-col gap-7">
            <Description />
            <CategoryInventory />
            <ShippingDelivery />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Provider;
