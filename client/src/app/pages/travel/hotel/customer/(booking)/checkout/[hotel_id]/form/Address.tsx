import React from "react";
import { useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CountryDropdown } from "./CountryDropDown";

const Address = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const watchAll = watch();
  return (
    <section className="space-y-4">
      <h1 className="text-sm font-semibold">Your address</h1>
      <div className="flex flex-col text-xs gap-1 min-w-[45%] flex-1">
        <label htmlFor="address" className="flex gap-1 font-semibold">
          Address <p className="text-red-500">*</p>
        </label>
        <input
          {...register("address")}
          type="text"
          className="border md:text-xs flex-1 min-h-8 rounded-md outline-blueish px-4"
        />
        {errors.address && (
          <p className="text-xs text-red-500">
            {errors.address.message as string}
          </p>
        )}
      </div>
      <div className="flex flex-col text-xs gap-1 min-w-[45%] flex-1">
        <label htmlFor="city" className="flex gap-1 font-semibold">
          City <p className="text-red-500">*</p>
        </label>
        <input
          {...register("city")}
          type="text"
          className="border md:text-xs flex-1 min-h-8 rounded-md outline-blueish px-4"
        />
        {errors.city && (
          <p className="text-xs text-red-500">
            {errors.city.message as string}
          </p>
        )}
      </div>
      <div className="flex flex-col text-xs gap-1 min-w-[45%] flex-1">
        <label htmlFor="zipCode" className="flex gap-1 font-semibold">
          Zip Code <p className="text-gray-400 font-normal">(optional)</p>
        </label>
        <input
          {...register("zipCode")}
          type="text"
          className="border md:text-xs flex-1 min-h-8 rounded-md outline-blueish px-4"
        />
        {errors.zipCode && (
          <p className="text-xs text-red-500">
            {errors.zipCode.message as string}
          </p>
        )}
      </div>
      <div className="flex flex-col text-xs gap-1 min-w-[45%] flex-1">
        <label htmlFor="city" className="flex gap-1 font-semibold">
          Phone <p className="text-red-500">*</p>
        </label>
        <PhoneInput
          onChange={(value) => {
            setValue("phone", value);
          }}
          value={watchAll.phone}
          defaultCountry="US"
          international
          withCountryCallingCode
          className="border md:text-xs flex-1 min-h-8 rounded-md outline-blueish px-4"
          inputClassName="w-full bg-transparent border-none focus:ring-0 focus:outline-none"
        />
        {errors.phone && (
          <p className="text-xs text-red-500">
            {errors.phone.message as string}
          </p>
        )}
      </div>
      {/* <div className="flex flex-col text-xs gap-1 min-w-[45%] flex-1">
        <label htmlFor="city" className="flex gap-1 font-semibold">
          Phone <p className="text-red-500">*</p>
        </label>
        <CountryDropdown
          placeholder="Country"
          defaultValue="united kingdom"
          onChange={(country) => {
            setValue("country", country);
          }}
        />
        {errors.country && (
          <p className="text-xs text-red-500">
            {errors.country.message as string}
          </p>
        )}
      </div> */}
    </section>
  );
};

export default Address;
