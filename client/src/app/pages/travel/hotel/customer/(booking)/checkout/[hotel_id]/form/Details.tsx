import React from "react";
import { useFormContext } from "react-hook-form";
const Details = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <section>
      <h1 className="text-lg font-semibold mb-5">Enter your details</h1>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col text-xs gap-1 min-w-[45%] flex-1">
          <label htmlFor="firstName" className="flex gap-1 font-semibold">
            First name <p className="text-red-500">*</p>
          </label>
          <input
            {...register("firstName")}
            type="text"
            className="border md:text-xs flex-1 min-h-8 rounded-md outline-blueish px-4"
          />
          {errors.firstName && (
            <p className="text-xs text-red-500">
              {errors.firstName.message as string}
            </p>
          )}
        </div>
        <div className="flex flex-col text-xs gap-1 min-w-[50%] flex-1">
          <label htmlFor="lastName" className="flex gap-1 font-semibold">
            Last name <p className="text-red-500">*</p>
          </label>
          <input
            {...register("lastName")}
            type="text"
            className="border md:text-xs flex-1 min-h-8 rounded-md outline-blueish px-4"
          />
          {errors.lastName && (
            <p className="text-xs text-red-500">
              {errors.lastName.message as string}
            </p>
          )}
        </div>
        <div className="flex flex-col text-xs gap-1 min-w-[50%] flex-1">
          <label htmlFor="email" className="flex gap-1 font-semibold">
            Email <p className="text-red-500">*</p>
          </label>
          <input
            {...register("email")}
            type="text"
            className="border md:text-xs flex-1 min-h-8 rounded-md outline-blueish px-4"
          />
          {errors.email && (
            <p className="text-xs text-red-500">
              {errors.email.message as string}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Details;
