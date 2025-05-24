"use client";

import { ChildrenProp } from "@/shared/types";
import { useEffect, useState } from "react";
import { getCurrentUser, login, logout } from "../api";
import { AuthContextValue, AuthState } from "../model";
import { AuthContext } from "../model/context";

export const AuthProvider: React.FC<ChildrenProp> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
  });

  const updateState = (state: AuthState) =>
    setState((prev) => ({
      ...prev,
      ...state,
    }));

  const checkAuth = () => {
    return getCurrentUser()
      .then((user) =>
        updateState({
          user: user.data,
          isLoading: false,
        })
      )
      .catch((error) => {
        updateState({
          user: null,
          isLoading: false,
        });
      });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value: AuthContextValue = {
    ...state,
    isAuthenticated: state.user !== null,
    login,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
