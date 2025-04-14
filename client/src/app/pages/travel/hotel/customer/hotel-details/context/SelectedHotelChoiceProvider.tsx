"use client";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";

interface Ichoice {
  roomType: string;
  options: { variant: number; count: number }[];
}

interface ITotalSelectionCount {
  roomCount: number;
  totalPrice: number;
}

interface IContext {
  selectedChoices: Ichoice[];
  setSelectedChoices: React.Dispatch<React.SetStateAction<Ichoice[]>>;
  totalSelectionCount: ITotalSelectionCount | null;
  setTotalSelectionCount: React.Dispatch<
    React.SetStateAction<ITotalSelectionCount | null>
  >;
}

const defaultContext: IContext = {
  selectedChoices: [],
  setSelectedChoices: () => {},
  totalSelectionCount: null,
  setTotalSelectionCount: () => {},
};

export const SelectedHotelChoicesContext =
  createContext<IContext>(defaultContext);

const SelectedHotelChoicesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [totalSelectionCount, setTotalSelectionCount] =
    useState<ITotalSelectionCount | null>(null);
  const [selectedChoices, setSelectedChoices] = useState<Ichoice[]>([]);

  return (
    <SelectedHotelChoicesContext.Provider
      value={{
        selectedChoices,
        setSelectedChoices,
        totalSelectionCount,
        setTotalSelectionCount,
      }}
    >
      {children}
    </SelectedHotelChoicesContext.Provider>
  );
};

export default SelectedHotelChoicesProvider;
