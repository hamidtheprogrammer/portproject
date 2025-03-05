import React from "react";

const Overview = () => {
  return (
    <div className="flex max-md:flex-col max-md:gap-10 items-center p-8 max-sm:p-3">
      <div className="flex  items-center gap-4 flex-1 border-r-[1px] border-gray-200">
        <img
          src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWR8ZW58MHx8MHx8fDA%3D"
          alt="avatar"
          className="aspect-square max-md:w-32 w-40 object-cover rounded-[999px]"
        />
        <span>
          <h1 className="text-3xl text-black/80 font-semibold">Mr. John Doe</h1>
          <p className="text-sm text-black/60">Joined 24th February, 2021</p>
        </span>
      </div>
      <div className="flex-1 flex flex-col gap-3 text-sm md:pl-10 max-md:w-full">
        <h1 className="text-3xl text-black/80 font-semibold">Address</h1>
        <span>
          <h2 className="font-medium text-black/70">United Kingdom</h2>
          <p className="text-black/60">124, Nice cool street</p>
          <p className="text-black/60">London</p>
          <p className="text-black/60">LO1 2AV</p>
        </span>
        <span>
          <h1 className="font-medium text-black/70">Email</h1>
          <a className="text-blueish hover:underline" href="##">
            johndoe@gmail.com
          </a>
        </span>
        <span>
          <h1 className="font-medium text-black/70">Phone</h1>
          <a className="text-blueish hover:underline" href="##">
            johndoe@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default Overview;
