import React, { createContext, useState } from "react";
export const darkModeContext = createContext();

export const Stateprovider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const handleDarkMode = () => {
    setIsDark((i) => !i);
  };
  return (
    <darkModeContext.Provider value={{ isDark, handleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
};
