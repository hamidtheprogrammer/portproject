"use client";
import { HomeIcon } from "@/app/svg";
import React, { useEffect, useState } from "react";
import Header from "../products-filtering/components/Header";
import Footer from "../products-filtering/components/Footer";
import { orderTracking } from ".";
import dynamic from "next/dynamic";

const DynamicMapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const DynamicTileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const DynamicMarker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const DynamicPopup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const OrderTracking = () => {
  const [customIcon, setCustomIcon] = useState();
  useEffect(() => {
    const L = require("leaflet");
    setCustomIcon(
      new L.Icon({
        iconUrl: "/LocationIcon.png",
        iconSize: [20, 35],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      })
    );
  }, []);

  return (
    <div
      className={`fixed inset-0 overflow-y-auto w-full z-[99999] bg-primaryBg flex flex-col justify-between`}
    >
      <Header />
      <section className="w-full mb-20">
        <div className="px-8 py-5 max-sm:px-3">
          <span className="flex items-center text-sm font-medium gap-2 mb-4">
            <HomeIcon height="15" width="15" />
            {">"}{" "}
            <p className="text-blueish cursor-pointer hover:underline">
              Orders
            </p>
            {">"} <p>Orders#3454</p>
          </span>
          <h1 className="font-bold text-2xl my-1">Order #3454 Status</h1>
          <p className="sm:text-xs text-black/50">
            Expected to be delivered by{" "}
            <a className="text-blueish cursor-pointer underline" href="##">
              12 Oct, 2025, 9:56PM
            </a>
          </p>
        </div>
        <div className="flex gap-16 max-sm:flex-col mt-4 px-8 max-sm:px-3">
          <span className="flex-1 max-sm:w-full  h-full aspect-square max-w-[40rem]">
            {typeof window !== "undefined" && customIcon && (
              <DynamicMapContainer
                style={{ height: "100%", width: "100%" }}
                center={[51.505, -0.09]}
                zoom={15}
                minZoom={2}
                maxBounds={[
                  [85, -180],
                  [-85, 180],
                ]}
              >
                <DynamicTileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <DynamicMarker icon={customIcon} position={[51.505, -0.09]}>
                  <DynamicPopup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </DynamicPopup>
                </DynamicMarker>
              </DynamicMapContainer>
            )}
          </span>
          <ul className="flex-1">
            {orderTracking.map((stage, idx) => (
              <li className="flex gap-4">
                <div className={`flex flex-col items-center `}>
                  <div
                    className={`h-6 w-6 bg-gray-200 rounded-[99px] ${
                      stage.time !== "pending" && "bg-green-600"
                    }`}
                  ></div>
                  {idx !== orderTracking.length - 1 && (
                    <div
                      className={`w-[1px] h-[5rem]  ${
                        stage.time === "pending"
                          ? "bg-gray-200"
                          : "bg-green-600"
                      }`}
                    ></div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-black/50 text-xs">{stage.time}</p>
                  <h1 className="text-sm font-medium">{stage.status}</h1>
                  {stage.time === "pending" ? (
                    <p className="text-black/50 text-xs">{stage.time}</p>
                  ) : (
                    <p className="text-black/50 text-xs">{stage.info}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OrderTracking;
