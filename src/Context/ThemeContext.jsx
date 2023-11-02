import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [bgArtTheme, setBgArtTheme] = useState(0);

  return (
    <ThemeContext.Provider value={{ bgArtTheme, setBgArtTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
