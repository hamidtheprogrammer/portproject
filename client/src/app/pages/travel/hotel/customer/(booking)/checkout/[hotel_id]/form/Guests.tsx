import { Check, CupSoda } from "lucide-react";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FcCancel } from "react-icons/fc";

const dummy = [
  {
    roomType: "Standard Twin Room",
    options: [
      {
        variant: 1,
        count: 2,
        choices: [
          { icon: "CupSoda", label: "Excellent breakfast for $21.20" },
          { icon: "Check", label: "Includes 20% off food/drink" },
          { icon: "FcCancel", label: "Non-refundable" },
        ],
        payment: "Pay now or at check-in",
      },
    ],
  },
  {
    roomType: "Executive Suite",
    options: [
      {
        variant: 1,
        count: 1,
        choices: [
          { icon: "Wine", label: "Exclusive wine & cheese tasting" },
          { icon: "Check", label: "Priority check-in & late checkout" },
          {
            icon: "FcCancel",
            label: "Refundable up to 48 hours before check-in",
          },
        ],
        payment: "Pay now or at check-in",
      },
    ],
  },
];

const Guests = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const watchAll = watch();
  return (
    <section className="flex flex-col gap-6">
      {dummy.map((d, roomIdx) => (
        <div key={d.roomType}>
          {d.options.map((option, variantIdx) => (
            <div
              className="p-3 rounded-lg border text-xs space-y-2"
              key={variantIdx}
            >
              <h1 className="font-semibold text-lg mb-3">{d.roomType}</h1>
              <span className="flex items-end gap-1">
                <CupSoda className="text-black/70" />{" "}
                <strong>Excellent </strong> breakfast for $21.20
              </span>
              <span className="flex items-center text-xs text-green-600 gap-2">
                <Check size={16} className="text-green-600" />
                Includes 20% off food/drink
              </span>
              <span className="flex items-center text-xs gap-2 font-bold">
                <FcCancel size={16} className="text-green-600" />
                {option.choices[2].label}
              </span>
              <li className="list-disc">{option.payment}</li>
              <div className="pt-4 flex flex-col text-xs gap-1 min-w-[45%] flex-1">
                <label htmlFor="guestName" className="flex gap-1 font-semibold">
                  Guest name
                </label>
                <input
                  value={d.roomType}
                  type="hidden"
                  {...register(
                    `guestNames[${roomIdx}][${variantIdx}].roomType`
                  )}
                />
                <input
                  value={option.variant}
                  type="hidden"
                  {...register(`guestNames[${roomIdx}][${variantIdx}].variant`)}
                />
                <input
                  {...register(`guestNames[${roomIdx}][${variantIdx}].name`)}
                  type="text"
                  className="border md:text-xs flex-1 min-h-8 rounded-md outline-blueish px-4"
                />
                {Array.isArray(errors.guestNames) &&
                  errors.guestNames[roomIdx][variantIdx] && (
                    <p className="text-xs text-red-500">
                      {errors.guestNames[roomIdx][variantIdx].message as string}
                    </p>
                  )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Guests;
