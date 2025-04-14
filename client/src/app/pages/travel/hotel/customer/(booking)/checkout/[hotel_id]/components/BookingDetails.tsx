"use client";
import React, { useEffect } from "react";
import { useContext } from "react";
import { SelectedHotelChoicesContext } from "../../../../hotel-details/context/SelectedHotelChoiceProvider";

const BookingDetails = () => {
  const {
    selectedChoices,
    setSelectedChoices,
    totalSelectionCount,
    setTotalSelectionCount,
  } = useContext(SelectedHotelChoicesContext);

  useEffect(() => console.log(selectedChoices), [selectedChoices]);
  return (
    <section className="flex flex-col gap-6">
      <div className="rounded-lg border p-4 space-y-2">
        <h1 className="font-semibold">Booking details</h1>
        <div className="text-xs flex ">
          <span className="border-r flex-1 py-3 space-y-2">
            <p className="font-medium">Check-in</p>
            <p className="text-sm font-semibold">Sun, Mar 16, 2025</p>
            <p className="font-light">From 2:30 PM</p>
          </span>
          <span className="flex-1 py-3 pl-3 space-y-2">
            <p className="font-medium">Check-out</p>
            <p className="font-medium">Mon, Mar 16, 2025</p>
            <p className="font-light">until 2:30 PM</p>
          </span>
        </div>
        <span className="font-medium text-xs">Total length of stay:</span>
        <h1 className="font-semibold text-sm">1 night</h1>
        <hr />
        <span className="font-medium text-xs">You selected</span>
        <h1 className="font-semibold text-sm">
          {totalSelectionCount?.roomCount || 0} rooms for 2 adults
        </h1>
      </div>
      <div className="rounded-lg border p-4 space-y-2">
        <h1 className="font-semibold">Your price summary</h1>
        <span className="flex justify-between text-xs font-light items-center">
          <p>Total</p>
          <p className="text-lg font-semibold">$746</p>
        </span>
      </div>
    </section>
  );
};

export default BookingDetails;
