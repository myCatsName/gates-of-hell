import { useEffect } from "react";
import { createContext, useState } from "react";

const ThemeContext = createContext();

const THEMES = {
  DEFAULT: {
    background: "background_swatch.png",
    cardBack: "PlayingCardReverse.webp",
  },
  CHILL: {
    background: "newGreenSwatch.png", //For some dumb reason greenSquaresSwatch.png stopped working :/
    cardBack: "EmbossedFlowerCard.webp",
  },
  SPOOKY: {
    background: "bloodyeyes.webp",
    cardBack: "ScrollCard2.webp",
  },
};

export function ThemeProvider({ children }) {
  const themeKeys = Object.keys(THEMES);
  const savedTheme = JSON.parse(localStorage.getItem("savedTheme"));
  const [themeIndex, setThemeIndex] = useState(savedTheme ? savedTheme : 0);
  const currentTheme = THEMES[themeKeys[themeIndex]];

  const nextTheme = () => {
    setThemeIndex((themeIndex + 1) % themeKeys.length);
  };

  useEffect(() => {
    localStorage.setItem("savedTheme", JSON.stringify(themeIndex));
  }, [themeIndex]);

  return (
    <ThemeContext.Provider value={{ nextTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
