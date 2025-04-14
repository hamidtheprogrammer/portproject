"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import Details from "./Details";
import Address from "./Address";
import Guests from "./Guests";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  address: z.string().min(1, "This field is required"),
  city: z.string().min(1, "This field is required"),
  zipCode: z.optional(z.string()),
  phone: z.string().min(8, "Invalid phone number"),
  guestNames: z.array(
    z.array(
      z.object({
        name: z.optional(z.string()),
        roomType: z.string().min(1, "Room selection is required"),
        variant: z.string().min(1, "No room choices have been selected"),
      })
    )
  ),
});

const Provider = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
      phone: "",
      guestNames: [],
    },
    resolver: zodResolver(formSchema),
  });

  const { handleSubmit, watch } = form;

  const router = useRouter();

  function submit(data: z.infer<typeof formSchema>) {
    alert(JSON.stringify(data));
    router.push("/pages/travel/hotel/customer/payment");
  }

  const watchAll = watch();

  //   useEffect(() => {
  //     console.log(watchAll);
  //   }, [watchAll]);

  return (
    <FormProvider {...form}>
      <form
        className="space-y-4 mb-20"
        action=""
        onSubmit={handleSubmit(submit)}
      >
        <div className="p-4 border rounded-lg w-full">
          <Details />
          <hr className="my-6" />
          <Address />
        </div>
        <div>
          <Guests />
        </div>

        <button
          type="submit"
          className="relative bg-blueish text-white rounded-md h-10 w-full px-4 text-xs group"
        >
          Go to payments
        </button>
      </form>
    </FormProvider>
  );
};

export default Provider;
