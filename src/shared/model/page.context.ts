"use client";

import { createContext, useContext } from "react";
import { Size } from "../types/size";

export interface PageContextValue {
  hasHeader: boolean;
  setHasHeader: (value: boolean) => void;
  headerSize: Size;
  setHeaderSize: (value: Size) => void;
}

export const PageContext = createContext<PageContextValue | null>(null);

export const usePageContext = () => {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }

  return context;
};
