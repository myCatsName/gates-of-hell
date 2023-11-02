import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import FooterButton from "./FooterButton";

export default function ThemeButton() {
  const { setBgArtTheme } = useContext(ThemeContext);
  return (
    <FooterButton
      onClick={() => {
        setBgArtTheme((prev) => prev + 1);
      }}
    >
      Theme
    </FooterButton>
  );
}
