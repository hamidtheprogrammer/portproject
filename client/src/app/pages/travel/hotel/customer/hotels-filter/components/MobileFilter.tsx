"use client";
import React, { useEffect } from "react";
import { filters, properties } from "..";
import { useState } from "react";
import { useContext } from "react";
import { HotelsContext } from "../context/HotelsProvider";

interface AppliedFilters {
  min?: number;
  max?: number;
  propertyType?: string[];
  borough?: string[];
  guestCapacity?: number;
  bedrooms?: number;
  bathrooms?: number;
  amenities?: string[];
  rating?: number[];
  bookingFlexibility?: string[];
  nearbyTransport?: string[];
  viewType?: string[];
  propertyRules?: string[];
  nearbyAttractions?: string[];
}

const defaultFilter: AppliedFilters = {
  min: 20,
  max: 1000,
  propertyType: [],
  borough: [],
  guestCapacity: undefined,
  bedrooms: undefined,
  bathrooms: undefined,
  amenities: [],
  rating: undefined,
  bookingFlexibility: [],
  nearbyTransport: [],
  viewType: [],
  propertyRules: [],
  nearbyAttractions: [],
};

const MobileFilter = () => {
  const [filterArray] = useState(filters);
  const [appliedFilters, setAppliedFilters] =
    useState<AppliedFilters>(defaultFilter);

  const { hotels, setHotels, setIsFilterOpen } = useContext(HotelsContext);

  useEffect(() => {
    let valid: AppliedFilters = {};

    for (const [key, value] of Object.entries(appliedFilters)) {
      if (value === undefined || value.length === 0) continue;

      valid[key as keyof AppliedFilters] = value;
    }

    setHotels(
      properties.filter((h) => {
        for (const [filterKey, filterValue] of Object.entries(valid)) {
          for (const [hotelKey, hotelValue] of Object.entries(h)) {
            if (filterKey === "min" && h.pricePerNight < filterValue) {
              return false;
            }

            if (filterKey === "max" && h.pricePerNight > filterValue) {
              return false;
            }

            if (valid["min"] !== undefined && valid["max"] !== undefined) {
              if (
                h.pricePerNight < valid["min"] ||
                h.pricePerNight > valid["max"]
              ) {
                return false;
              }
            }

            if (hotelKey === filterKey) {
              if (typeof hotelValue === "number") {
                if (hotelValue < filterValue) return false;
              } else {
                if (!filterValue.some((i: string) => hotelValue.includes(i)))
                  return false;
              }
            }
          }
        }
        return true;
      })
    );
  }, [appliedFilters]);

  return (
    <div className="rounded-lg border-[1px] shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
      <h1 className="font-medium text-sm py-2 pl-2 border-b-[1px]">
        Filter by:
      </h1>
      <ul>
        {filterArray.map((f) => (
          <li className="border-b-[1px]" key={f.tag}>
            {f.type === "range" ? (
              <div className="p-4">
                <h1 className="font-semibold text-xs my-2">Budget</h1>
                <p className="text-sm text-black/80">
                  ${appliedFilters.min} - ${appliedFilters.max}+
                </p>
                <div className="font-light text-sm mt-5">
                  <label htmlFor="minPrice">Min</label>
                  <input
                    onChange={(e) => {
                      setAppliedFilters((prev: any) => ({
                        ...prev,
                        min: e.target.value,
                      }));
                    }}
                    value={appliedFilters.min}
                    type="range"
                    min={20}
                    max={1000}
                    className="w-full cursor-pointer"
                  />
                </div>
                <div className="font-light text-sm">
                  <label htmlFor="minPrice">Max</label>
                  <input
                    onChange={(e) => {
                      setAppliedFilters((prev: any) => ({
                        ...prev,
                        max: e.target.value,
                      }));
                    }}
                    value={appliedFilters.max}
                    type="range"
                    min={20}
                    max={1000}
                    className="w-full cursor-pointer"
                  />
                </div>
              </div>
            ) : f.type === "number" ? (
              <div className="p-4">
                <h1 className="font-semibold text-xs my-2">{f.name}</h1>
                <div className="flex flex-col gap-2">
                  {f.items?.map((i) => (
                    <div className="text-sm flex gap-2">
                      <input
                        type="radio"
                        onChange={(e) => {
                          setAppliedFilters((prev) => ({
                            ...prev,
                            [f.tag]: e.target.checked ? i : undefined,
                          }));
                        }}
                        checked={
                          typeof i === "number" &&
                          appliedFilters[f.tag as keyof AppliedFilters] === i
                        }
                      />
                      <label
                        className="font-light text-sm text-black/90"
                        htmlFor={`${i}`}
                      >
                        {typeof i === "number" && `${i}`}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              f.type === "array" && (
                <div className="p-4">
                  <h1 className="font-semibold text-xs my-2">{f.name}</h1>
                  <div className="flex flex-col gap-2">
                    {f.items?.map((i) => (
                      <div className="text-sm flex gap-2">
                        <input
                          type="checkbox"
                          onChange={(e: any) => {
                            setAppliedFilters((prev) => {
                              const currentValues = Array.isArray(
                                appliedFilters[f.tag as keyof AppliedFilters]
                              )
                                ? appliedFilters[f.tag as keyof AppliedFilters]
                                : [];

                              return {
                                ...prev,
                                [f.tag]: e.target.checked
                                  ? [
                                      ...(currentValues as string[]),
                                      typeof i === "object" &&
                                        (i.label as string),
                                    ]
                                  : (currentValues as string[]).filter(
                                      (c: string) =>
                                        typeof i === "object" && c !== i.label
                                    ),
                              };
                            });
                          }}
                          checked={
                            typeof i === "object" &&
                            Array.isArray(
                              appliedFilters[f.tag as keyof AppliedFilters]
                            ) &&
                            (
                              appliedFilters[
                                f.tag as keyof AppliedFilters
                              ] as string[]
                            ).includes(i.label)
                          }
                        />
                        <label
                          className="capitalize font-light text-sm text-black/90"
                          htmlFor={typeof i === "object" ? i.label : ""}
                        >
                          {typeof i === "object" && i.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsFilterOpen(false)}
        className="sticky mx-auto bottom-5 w-[99%] hover:bg-blueish/70 bg-blueish rounded-lg text-white h-10 flex justify-center items-center text-xs"
      >
        Show {hotels.length} results
      </button>
    </div>
  );
};

export default MobileFilter;
