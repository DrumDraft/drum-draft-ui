"use client";

import { PageContext, PageContextValue } from "@/shared/model/page.context";
import { ChildrenProp } from "@/shared/types";
import { Size } from "@/shared/types/size";
import { useMemo, useState } from "react";

export interface PageContextProviderProps extends ChildrenProp {}

export const PageContextProvider: React.FC<PageContextProviderProps> = ({
  children,
}) => {
  const [hasHeader, setHasHeader] = useState(true);
  const [headerSize, setHeaderSize] = useState<Size>("md");

  const value: PageContextValue = useMemo(
    () => ({
      hasHeader,
      setHasHeader,
      headerSize,
      setHeaderSize,
    }),
    [hasHeader, headerSize]
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
