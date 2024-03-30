import { GridItem } from "@chakra-ui/react";
import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

export default function SidePanels() {
  const { currentTheme } = useContext(ThemeContext);
  const sidepanelArt = currentTheme.background;

  return (
    <>
      <GridItem
        className="sidepanel"
        backgroundImage={`url(${require("../Assets/Swatches/" +
          sidepanelArt)})`}
        gridArea="1/1/6/4"
      />
      <GridItem
        className="sidepanel"
        backgroundImage={`url(${require("../Assets/Swatches/" +
          sidepanelArt)})`}
        gridArea="1/10/6/13"
      />
    </>
  );
}
