import { GridItem } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import ThemeContext from "../Context/ThemeContext";
import redSwatch from "../Assets/Swatches/background_swatch.png";
import greenSwatch from "../Assets/Swatches/newGreenSwatch.webp";
import bloodyeyes from "../Assets/Swatches/bloodyeyes.webp";
const imagesArray = [bloodyeyes, greenSwatch, redSwatch];

export default function SidePanels() {
  const { currentTheme } = useContext(ThemeContext);
  const sidepanelArt = currentTheme.background;

  //pre-load images to avoid "flicker"
  useEffect(() => {
    imagesArray.forEach((image) => {
      const imageElement = new Image();
      imageElement.src = image;
    });
  }, []);

  return (
    <>
      <GridItem
        className="sidePanel"
        backgroundImage={`url(${require("../Assets/Swatches/" +
          sidepanelArt)})`}
        gridArea="1/1/6/4"
      />
      <GridItem
        className="sidePanel"
        backgroundImage={`url(${require("../Assets/Swatches/" +
          sidepanelArt)})`}
        gridArea="1/10/6/13"
      />
    </>
  );
}
