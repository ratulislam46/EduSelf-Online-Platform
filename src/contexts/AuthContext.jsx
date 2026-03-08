"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SessionProvider>
      <AuthContext.Provider value={{ isLoading, setIsLoading }}>
        {children}
      </AuthContext.Provider>
    </SessionProvider>
  );
}
