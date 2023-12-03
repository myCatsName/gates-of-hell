import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import FooterButton from "./FooterButton";

import { coinDropSFX } from "../Sound/SFX";

export default function ThemeButton() {
  const { nextTheme } = useContext(ThemeContext);
  return (
    <FooterButton
      onClick={() => {
        coinDropSFX.play();
        nextTheme();
      }}
    >
      Theme
    </FooterButton>
  );
}
