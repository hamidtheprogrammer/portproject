"use client";
import React, { useEffect } from "react";
import { orderByRegionData } from "../seed";
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

// const [customIcon, setCustomIcon] = useState();
// useEffect(() => {
//   const L = require("leaflet");
//   setCustomIcon(
//     new L.Icon({
//       iconUrl: "/LocationIcon.png",
//       iconSize: [20, 35],
//       iconAnchor: [12, 41],
//       popupAnchor: [1, -34],
//     })
//   );
// }, []);

const SalesMap = () => {
  return (
    <div className="md:col-span-2">
      <div className="text-center my-7 space-y-4">
        <h1 className="text-3xl font-bold dark:darkPrimaryText">
          Sales by region mapped
        </h1>
        <p className="font-semibold secondaryText dark:darkSecondaryText">
          Last 7 days
        </p>
      </div>
      {typeof window !== "undefined" && (
        <DynamicMapContainer
          center={[20, 0]}
          zoom={2}
          minZoom={2}
          style={{ height: "400px", width: "100%" }}
          maxBounds={[
            [85, -180],
            [-85, 180],
          ]}
        >
          {/* Tile Layer */}
          <DynamicTileLayer
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
          />

          {/* Clustering */}

          {orderByRegionData.map((order, index) => (
            <DynamicMarker
              // icon={customIcon}
              key={index}
              position={[order.lat, order.lng]}
            >
              <DynamicPopup>
                <strong>
                  {order.city}, {order.country}
                </strong>
                <br />
                Orders: {order.orders}
              </DynamicPopup>
            </DynamicMarker>
          ))}
        </DynamicMapContainer>
      )}
    </div>
  );
};

export default SalesMap;
