"use client";
import { createContext, ReactNode, useState } from "react";
import React from "react";

interface ContextProps {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme: ITheme;
  setTheme: React.Dispatch<React.SetStateAction<ITheme>>;
}

export enum ITheme {
  LIGHT = "light",
  DARK = "dark",
}

const defaultContext = {
  isSideBarOpen: false,
  setIsSideBarOpen: () => {},
  theme: ITheme.LIGHT,
  setTheme: () => {},
};

export const UIContext = createContext<ContextProps>(defaultContext);

const UIContextProvider = ({ children }: { children: ReactNode }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<ITheme>(ITheme.LIGHT);

  return (
    <UIContext.Provider
      value={{ isSideBarOpen, setIsSideBarOpen, theme, setTheme }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
