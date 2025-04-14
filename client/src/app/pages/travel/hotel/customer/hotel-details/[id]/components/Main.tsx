"use client";
import React, { useEffect, useState } from "react";
import TravelInfo from "../../../home/components/TravelInfo";
import BackTracking from "../../../hotels-filter/components/BackTracking";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { HotelsContext } from "../../../hotels-filter/context/HotelsProvider";
import { Property } from "../../../hotels-filter";
import Gallery from "./Gallery";
import RoomSelection from "./RoomSelection";
import Title from "./Title";
import Amenities from "./Amenities";
import Description from "./Description";
import Advert from "../../../home/components/Advert";
import Reviews from "./Reviews";
import FAQSection from "./FAQ";
import SelectedHotelChoicesProvider from "../../context/SelectedHotelChoiceProvider";

const Main = () => {
  const { hotels } = useContext(HotelsContext);
  const params = useParams();

  const hotelId = params.id;

  const [hotel, setHotel] = useState<Property>();

  useEffect(() => {
    if (hotelId) {
      setHotel(hotels.find((h) => h.id === hotelId));
    }
  }, [hotelId]);
  return (
    <div>
      <h1 className="text-white font-bold text-3xl">Hotel info</h1>
      <TravelInfo />
      <div className="max-sm:hidden">
        <BackTracking hotel={hotel ? hotel.name : "Not found"} />
      </div>
      {hotel && (
        <SelectedHotelChoicesProvider>
          <Title hotel={hotel} />
          <Gallery />
          <Amenities />
          <Description h={hotel} />
          <Advert />
          <RoomSelection hotel={hotel} />
          <Reviews />
          <FAQSection />
        </SelectedHotelChoicesProvider>
      )}
    </div>
  );
};

export default Main;
