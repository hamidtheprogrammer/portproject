"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { properties, Property } from "../../../hotels-filter";
import { StarIcon } from "@/app/svg";
import { Dot } from "lucide-react";
import Provider from "./form/FormProvider";
import BookingDetails from "./components/BookingDetails";
import SelectedHotelChoicesProvider from "../../../hotel-details/context/SelectedHotelChoiceProvider";

const page = () => {
  const params = useParams();

  const { hotel_id } = params;

  const [property, setProperty] = useState<Property>();
  useEffect(() => {
    setProperty(properties.find((p) => p.id === hotel_id));
  }, [hotel_id]);
  return (
    <>
      {property && (
        <SelectedHotelChoicesProvider>
          <section className="flex gap-6 flex-wrap">
            <div className="flex flex-col gap-5 flex-1 h-fit">
              <div className="rounded-lg border p-4 h-fit">
                <div className="flex gap-1 items-center text-xs">
                  <p>Hotel</p>
                  <div className="flex">
                    {Array.from({ length: property.rating }).map((s, idx) => (
                      <StarIcon key={idx} height="13" width="13" />
                    ))}
                  </div>
                </div>
                <h1 className="text-sm font-semibold my-2">{property.name}</h1>
                <p className="text-xs font-light">
                  {property.nearbyAttractions}, {property.borough}, London, LO1
                  BOA, United Kingdom
                </p>
                <span className="text-xs font-light flex items-center my-2">
                  <p className="text-white mr-3 bg-blue-700 rounded-md rounded-bl-none h-8 w-8 flex justify-center items-center">
                    9.0
                  </p>
                  <p>Very good</p> <Dot /> 4,000 reviews
                </span>
              </div>
              <BookingDetails />
            </div>
            <div className="">
              <Provider />
            </div>
          </section>
        </SelectedHotelChoicesProvider>
      )}
    </>
  );
};

export default page;
