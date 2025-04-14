import QueryProvider from "@/app/QueryProvider";
import React from "react";
import Overview from "./components/Overview";
import BookingManagement from "./components/BookingManagement";

const page = () => {
  return (
    <QueryProvider>
      <section className="absolute w-full overflow-hidden">
        <Overview />
        <BookingManagement />
      </section>
    </QueryProvider>
  );
};

export default page;
