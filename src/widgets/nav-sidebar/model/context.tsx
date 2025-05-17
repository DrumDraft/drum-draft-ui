import React from 'react';
import { NavBarContextValue } from './index';

export const NavBarContext = React.createContext<
  NavBarContextValue | undefined
>(undefined);

export const useNavBarContext = () => {
  const context = React.useContext(NavBarContext);
  if (!context) {
    throw new Error("useNavBarContext must be used within a NavBarProvider");
  }
  return context;
};
