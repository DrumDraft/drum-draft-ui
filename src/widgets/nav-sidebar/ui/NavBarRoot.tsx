"use client";
import { ChildrenProp } from "@/shared/types";
import { Sidebar } from "@/shared/ui/components/side-bar/Sidebar";
import { useMemo } from "react";
import { useState } from "react";
import { NavBarContext } from "../model/context";

export const NavBarRoot: React.FC<ChildrenProp> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen]
  );

  return (
    <NavBarContext.Provider value={value}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} maxWidth={280}>
        {children}
      </Sidebar>
    </NavBarContext.Provider>
  );
};
