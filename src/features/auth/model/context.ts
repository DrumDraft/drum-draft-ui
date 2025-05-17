"use client";

import { createContext } from 'react';
import { AuthContextValue } from './index';

export const AuthContext = createContext<AuthContextValue | null>(null);
