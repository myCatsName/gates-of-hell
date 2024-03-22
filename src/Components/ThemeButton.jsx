import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import FooterButton from "./FooterButton";

import { playCoinDropSFX } from "../HelperFx/SFX";

export default function ThemeButton() {
  const { nextTheme } = useContext(ThemeContext);
  return (
    <FooterButton
      onClick={() => {
        playCoinDropSFX();
        nextTheme();
      }}
    >
      Theme
    </FooterButton>
  );
}
