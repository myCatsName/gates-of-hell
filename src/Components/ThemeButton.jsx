import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import FooterButton from "./FooterButton";

export default function ThemeButton() {
  const { nextTheme } = useContext(ThemeContext);
  return (
    <FooterButton
      onClick={() => {
        nextTheme();
      }}
    >
      Theme
    </FooterButton>
  );
}
