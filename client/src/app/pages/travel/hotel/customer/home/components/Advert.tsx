import React from "react";

const Advert = () => {
  return (
    <div className="text-black my-16 flex flex-col gap-4">
      <div>
        <h1 className="font-bold text-xl">Offers</h1>
        <p className="text-sm text-black/70">
          Promotions, deals, and special offers for you
        </p>
      </div>
      <div className="border-[1px] p-3 flex justify-between rounded-lg">
        <span>
          <h1 className="font-bold text-lg">
            Unlock Exclusive Travel Discounts
          </h1>
          <p className="text-sm text-black/70">
            Kick off your journey with up to 15% savings on early 2025 bookings.
          </p>
          <button className="mt-3 bg-blueish text-white rounded-md h-10 px-4 text-xs">
            Grab Your Discount
          </button>
        </span>
        <img
          className="max-w-[10rem] max-sm:max-w-[5rem] max-sm:max-h-[5rem] object-cover"
          src="https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="picture"
        />
      </div>
    </div>
  );
};

export default Advert;
