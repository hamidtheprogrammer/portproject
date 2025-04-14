"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import { getBookingsData, getCustomers } from "../apiClient";

const getStatusColor = (status: string): string => {
  const statusColors: Record<string, string> = {
    confirmed: "#28a745",
    pending: "#ffc107",
    canceled: "#dc3545",
    paid: "#28a745",
    refunded: "#007bff",
  };

  return statusColors[status] || "#6c757d";
};
const tableHeadStyles = "border bg-blue-500 text-white h-8";
const tableDataStyles = "border h-12 ";

const BookingManagement = () => {
  const [pageNumbers, setPageNumbers] = useState({ hotel: 1, flight: 1 });

  const [matchedCustomers, setMatchedCustomers] = useState<any>();

  const sectionRef = useRef<HTMLDivElement>(null);

  const { data, mutate, isLoading } = useMutation({
    mutationFn: getBookingsData,
  });

  const {
    data: searchData,
    mutate: searchMutate,
    isLoading: searchLoading,
  } = useMutation({
    mutationFn: getCustomers,
  });

  useEffect(() => {
    mutate({ pageNumbers });
  }, []);

  useEffect(() => {
    mutate({ pageNumbers });
  }, [pageNumbers]);

  function handleGetMatchedCustomers(data: object) {
    setTimeout(() => {
      searchMutate(data);
    }, 500);
  }

  useEffect(() => {
    if (searchData && searchData.flightCustomers) {
      setMatchedCustomers({ flights: searchData.flightCustomers });
    } else if (searchData && searchData.hotelCustomers) {
      setMatchedCustomers({ hotels: searchData.hotelCustomers });
    }
  }, [searchData]);

  useEffect(() => {
    if (!sectionRef.current) return;

    function clearMatchedCustomers() {
      setMatchedCustomers(null);
    }

    sectionRef.current.addEventListener("click", () => {
      clearMatchedCustomers();
    });

    return () => {
      if (!sectionRef.current) return;
      sectionRef.current.removeEventListener("click", () => {
        clearMatchedCustomers();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="rounded-lg p-4 pb-0">
      {!data || isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col gap-4">
          {Array.from(Object.entries(data?.bookingManagement.bookingsData)).map(
            ([Key, value]) => (
              <div
                key={Key}
                className="rounded-lg bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.1)]"
              >
                <span className="flex justify-between p-4 border-b text-black/60">
                  <div className="w-full flex md:justify-between max-md:flex-col max-md:gap-4">
                    <h1 className="text-sm font-semibold capitalize">{Key}</h1>
                    <div className="relative flex items-center ">
                      <img
                        className="absolute opacity-30 w-4 aspect-square ml-3"
                        src="/SearchIcon.svg"
                        alt="search"
                      />
                      <input
                        onChange={(e) => {
                          handleGetMatchedCustomers({ [Key]: e.target.value });
                        }}
                        type="text"
                        className="border-[1px] dark:bg-darkSecondaryBg dark:darkBorder rounded-md w-80 h-8 md:text-xs pl-8 focus:outline-none"
                        placeholder="Search by customer name..."
                      />
                    </div>
                    {matchedCustomers && matchedCustomers[Key] && (
                      <div className="absolute top-full bg-white text-xs p-2 rounded-lg shadow-[0px_2px_3px_rgba(0,0,0,0.3)] w-full">
                        {matchedCustomers[Key].map((c: any) => (
                          <div
                            key={c.customer.name}
                            className=" hover:bg-gray-200 rounded-lg p-2 cursor-pointer"
                          >
                            {c.customer.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </span>
                <div className="p-4 overflow-x-auto">
                  <table className="min-w-[900px] text-xs font-normal w-full rounded-lg overflow-hidden">
                    <thead className="">
                      <tr>
                        <th className={`${tableHeadStyles}`}></th>
                        <th className={`${tableHeadStyles}`}>BookingId</th>
                        <th className={`${tableHeadStyles} max-w-[5rem]`}>
                          Customer Name
                        </th>
                        <th className={`${tableHeadStyles}`}>Contact</th>
                        {Key === "flights" ? (
                          <>
                            <th className={`${tableHeadStyles}`}>Flight no</th>
                            <th className={`${tableHeadStyles}`}>Date</th>
                          </>
                        ) : (
                          <>
                            <th className={`${tableHeadStyles}`}>
                              Destination
                            </th>
                            <th className={`${tableHeadStyles}`}>Check-in</th>
                          </>
                        )}
                        <th className={`${tableHeadStyles}`}>Price</th>
                        <th className={`${tableHeadStyles}`}>Payment</th>
                        <th className={`${tableHeadStyles}`}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(value) &&
                        value.map((v) => (
                          <tr className="text-center">
                            <td className={`${tableDataStyles}`}>
                              <input type="checkbox" />
                            </td>
                            <td className={`${tableDataStyles}`}>
                              {v.bookingId}
                            </td>
                            <td className={`${tableDataStyles}`}>
                              {v.customer.name}
                            </td>
                            <td className={`${tableDataStyles}`}>
                              {v.customer.email}
                            </td>
                            {Key === "flights" ? (
                              <>
                                <td className={`${tableDataStyles}`}>
                                  {v.flightDetails.flightNumber}
                                </td>
                                <td className={`${tableDataStyles}`}>
                                  {v.flightDetails.departure.dateTime}
                                </td>
                              </>
                            ) : (
                              <>
                                <td className={`${tableDataStyles}`}>
                                  {v.hotelDetails.location}
                                </td>
                                <td className={`${tableDataStyles}`}>
                                  {v.hotelDetails.checkIn}
                                </td>
                              </>
                            )}
                            <td className={`${tableDataStyles}`}>
                              ${v.price.toLocaleString()}
                            </td>
                            <td
                              className={`${tableDataStyles} flex justify-center items-center gap-1`}
                            >
                              <div
                                style={{
                                  background: getStatusColor(v.payment),
                                }}
                                className="h-2 w-2 rounded-[99px]"
                              ></div>
                              {v.payment}
                            </td>
                            <td className={`${tableDataStyles} `}>
                              <span className="flex justify-center items-center gap-1">
                                <div
                                  style={{
                                    background: getStatusColor(v.status),
                                  }}
                                  className="h-2 w-2 rounded-[99px]"
                                ></div>
                                {v.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <div className="w-full flex justify-end gap-2 mt-4">
                    {Key === "flights"
                      ? Array.from({
                          length: data.bookingManagement.pagination.flightPages,
                        }).map((_, idx) => (
                          <span
                            onClick={() =>
                              setPageNumbers((prev) => ({
                                ...prev,
                                flight: idx + 1,
                              }))
                            }
                            className={`cursor-pointer ${
                              Number(
                                data.bookingManagement.pagination
                                  .flightPageNumber
                              ) ===
                                idx + 1 && "bg-blueish text-white"
                            } w-5 h-5 flex justify-center items-center rounded-sm`}
                          >
                            {idx + 1}
                          </span>
                        ))
                      : Array.from({
                          length: data.bookingManagement.pagination.hotelPages,
                        }).map((_, idx) => (
                          <span
                            onClick={() =>
                              setPageNumbers((prev) => ({
                                ...prev,
                                hotel: idx + 1,
                              }))
                            }
                            className={`cursor-pointer ${
                              Number(
                                data.bookingManagement.pagination
                                  .hotelPageNumber
                              ) ===
                                idx + 1 && "bg-blueish text-white"
                            } w-5 h-5 flex justify-center items-center rounded-sm`}
                          >
                            {idx + 1}
                          </span>
                        ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
};

export default BookingManagement;
