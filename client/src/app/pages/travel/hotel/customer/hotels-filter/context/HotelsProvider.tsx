"use client";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";
import { properties, Property } from "..";

interface IContext {
  hotels: Property[];
  setHotels: React.Dispatch<React.SetStateAction<Property[]>>;
  isFilterOpen: boolean;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContext: IContext = {
  hotels: [],
  setHotels: () => {},
  isFilterOpen: false,
  setIsFilterOpen: () => {},
};

export const HotelsContext = createContext<IContext>(defaultContext);

const HotelsProvider = ({ children }: { children: ReactNode }) => {
  const [hotels, setHotels] = useState<Property[]>(properties);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  return (
    <HotelsContext.Provider value={{ hotels, setHotels, isFilterOpen, setIsFilterOpen }}>
      {children}
    </HotelsContext.Provider>
  );
};

export default HotelsProvider;
