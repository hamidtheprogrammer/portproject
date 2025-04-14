"use client";
import React, { useEffect } from "react";
import { BedDouble, User, CupSoda } from "lucide-react";
import { Check } from "lucide-react";
import { FcCancel } from "react-icons/fc";
import { roomsData } from "..";
import AmenityIcon from "./AmenityIcon";
import { useRouter } from "next/navigation";
import { Property } from "../../../hotels-filter";
import { useContext } from "react";
import { SelectedHotelChoicesContext } from "../../context/SelectedHotelChoiceProvider";

const hey = [
  {
    roomType: "Standard Twin Room",
    options: [
      { variant: 1, count: 3 },
      { variant: 1, count: 3 },
    ],
  },
  {
    roomType: "Standard Twin Room",
    options: [
      { variant: 1, count: 3 },
      { variant: 1, count: 3 },
    ],
  },
];

const RoomSelection = ({ hotel }: { hotel: Property }) => {
  const {
    selectedChoices,
    setSelectedChoices,
    totalSelectionCount,
    setTotalSelectionCount,
  } = useContext(SelectedHotelChoicesContext);

  const router = useRouter();

  function calculateRoomCount() {
    const pricePerRoomType: { count: number; totalPrice: number }[] = [];

    selectedChoices.forEach((choice) => {
      const roomTypeMatch = roomsData.find(
        (r) => r.roomType === choice.roomType
      );

      const price_count = { count: 0, totalPrice: 0 };
      choice.options.forEach((o) => {
        const price = roomTypeMatch?.options[o.variant - 1].price;
        price_count.totalPrice += (price as number) * o.count;
        price_count.count += o.count;
      });

      pricePerRoomType.push(price_count);
    });

    const count = pricePerRoomType.reduce(
      (total, current) => total + current.count,
      0
    );
    if (count <= 0) {
      setTotalSelectionCount(null);
      return;
    }

    const price = pricePerRoomType.reduce(
      (total, current) => total + current.totalPrice,
      0
    );

    setTotalSelectionCount({ roomCount: count, totalPrice: price });
  }

  function handleRoomSelection({
    roomType,
    variant,
    count,
  }: {
    roomType: string;
    variant: number;
    count: number;
  }) {
    if (isNaN(count)) return;
    const typeExists = selectedChoices.find(
      (choice) => choice.roomType === roomType
    );

    if (typeExists) {
      setSelectedChoices((prev) =>
        prev.map((choice) => {
          const variantExists = choice.options.find(
            (option) => option.variant === variant
          );

          if (variantExists) {
            return choice.roomType === typeExists.roomType
              ? {
                  ...choice,
                  options: choice.options.map((option) =>
                    variantExists.variant === option.variant
                      ? { ...option, count }
                      : option
                  ),
                }
              : choice;
          }
          return choice.roomType === typeExists.roomType
            ? { ...choice, options: [...choice.options, { variant, count }] }
            : choice;
        })
      );
    } else {
      setSelectedChoices((prev) => [
        ...prev,
        {
          roomType,
          options: [{ variant, count }],
        },
      ]);
    }
  }

  useEffect(calculateRoomCount, [selectedChoices]);

  useEffect(() => console.log(selectedChoices), [selectedChoices]);

  return (
    <section>
      <h1 className="font-bold ">Room selection</h1>
      <div className="overflow-x-auto room-selection">
        <div className="flex flex-col min-w-[950px]">
          <table className="w-full sticky top-0 border-collapse border border-r-none border-gray-300 text-xs">
            <thead className="h-12">
              <tr className="bg-blue-800 text-white">
                <th className="border p-1 w-[15rem]">Rooom type</th>
                <th className="border p-1 w-[9rem]">Number of guests</th>
                <th className="border p-1 w-[7rem]">Price</th>
                <th className="border p-1">Your choices</th>
                <th className="border p-1 w-[4rem]">Select Rooms</th>
                <th className="border p-1 w-[11rem]"></th>
              </tr>
            </thead>
          </table>
          <div className="flex">
            <div className="flex flex-col">
              {roomsData.map((d) => (
                <div className="flex">
                  <table className="w-[15rem] border-collapse border border-r-none border-gray-300 text-xs">
                    <tbody>
                      <tr>
                        <td className="border py-5 pb-32 px-1 text-black/70">
                          <a
                            href="##"
                            className="text-blueish underline font-bold text-sm"
                          >
                            {d.roomType}
                          </a>
                          <p className="my-3 flex items-center gap-1">
                            {d.beds[0]} <BedDouble size={25} />
                            <BedDouble size={25} />
                          </p>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {d.amenities.map((item, idx) => (
                              <AmenityIcon key={idx} data={item} />
                            ))}
                          </div>
                          <hr className="my-3" />
                          <ul className="flex flex-wrap gap-1">
                            {d.otherAmenities.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center text-xs "
                              >
                                <Check size={16} className="text-green-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>{" "}
                  <table className="border-collapse border border-r-none border-gray-300 text-xs flex-1">
                    <tbody>
                      {d.options.map((option, idx) => (
                        <tr>
                          <td className="border p-1 w-[9rem]">
                            <span className="flex">
                              {Array.from({ length: option.guests }).map(
                                (n) => (
                                  <User />
                                )
                              )}
                            </span>
                          </td>
                          <td className="border p-1 font-semibold text-lg w-[7rem]">
                            ${option.price}
                            <p className="text-xs font-extralight">
                              {option.includes}
                            </p>
                          </td>
                          <td className="border p-1 space-y-2">
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
                          </td>
                          <td className="border w-[4rem] p-1">
                            <select
                              onChange={(e) =>
                                handleRoomSelection({
                                  roomType: d.roomType,
                                  variant: idx + 1,
                                  count: parseInt(e.target.value) || 0,
                                })
                              }
                              name=""
                              id=""
                              className="border border-black"
                            >
                              <option value={0}>0</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
            <table className="min-w-[11rem] self-start h-full sticky top-12 border-collapse  border-r-none border-gray-300 text-xs">
              <tbody>
                <tr>
                  <td
                    style={{ verticalAlign: "top" }}
                    className="border py-5 pb-32 px-1 "
                  >
                    <div className="h-full flex justify-center flex-col gap-3">
                      {totalSelectionCount && (
                        <span className="text-xs space-y-2">
                          <p>
                            {totalSelectionCount.roomCount} room for{" "}
                            <strong className="text-lg font-medium">
                              ${totalSelectionCount.totalPrice}
                            </strong>
                          </p>
                          <p className="font-light">includes taxes and fees</p>
                        </span>
                      )}
                      <button
                        onClick={() => {
                          router.push(
                            `/pages/travel/hotel/customer/checkout/${hotel.id}`
                          );
                        }}
                        disabled={
                          totalSelectionCount === null ||
                          (totalSelectionCount?.roomCount as number) < 1
                        }
                        className="relative bg-blueish  text-white rounded-md h-10 w-full px-4 text-xs group"
                      >
                        Continue
                        {(totalSelectionCount === null ||
                          (totalSelectionCount?.roomCount as number) < 1) && (
                          <p className="absolute top-[calc(100%+10px)]  bg-red-100 border hidden group-hover:block border-red-800 text-red-800 p-3">
                            Select a room first
                          </p>
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomSelection;
