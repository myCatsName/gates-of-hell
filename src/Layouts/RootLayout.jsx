//react
import { Grid, GridItem } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import ThemeContext from "../Context/ThemeContext";

//pages
import Footer from "./Footer";
import { Altar } from "../Pages/Altar";
import MemoryGame from "../Components/MemoryGame";
import StatsPanel from "../Components/StatsPanel";

//assets
import AltarImage from "../Assets/Acala_at_Buddha_Tooth_Relic_Temple_Redder.webp";
import headerLinen from "../Assets/Swatches/possible_header_background.webp";
import linen from "../Assets/Swatches/lightToDarkLinen.png";

import redSwatch from "../Assets/Swatches/background_swatch.png";
import greenSwatch from "../Assets/Swatches/newGreenSwatch.webp";
import bloodyeyes from "../Assets/Swatches/bloodyeyes.webp";

const imagesArray = [bloodyeyes, greenSwatch, redSwatch];

export default function RootLayout() {
  const { currentTheme } = useContext(ThemeContext);
  const sidepanelArt = currentTheme.background;
  console.log(currentTheme);

  //pre-load images to avoid "flicker"
  useEffect(() => {
    imagesArray.forEach((image) => {
      const imageElement = new Image();
      imageElement.src = image;
    });
  }, []);

  return (
    <Grid
      className="RootLayout"
      background={"#565656"}
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(4,1fr) 1fr minmax(10vh, 20fr)" // TODO: improve responsive designs
    >
      <GridItem
        as="header"
        backgroundImage={headerLinen}
        bgSize={"cover"}
        gridArea="1/4/2/10"
        style={{ position: "relative", height: `18vh` }}
      >
        <Altar />
        <StatsPanel />
      </GridItem>

      <GridItem
        as="section"
        className="sidePanel"
        backgroundColor={"black"}
        backgroundImage={`url(${require("../Assets/Swatches/" +
          sidepanelArt)})`}
        gridArea="1/1/6/4"
      ></GridItem>

      <GridItem
        as="section"
        className="sidePanel"
        backgroundColor={"black"}
        backgroundImage={`url(${require("../Assets/Swatches/" +
          sidepanelArt)})`}
        gridArea="1/10/6/13"
      ></GridItem>

      <GridItem
        as="main"
        id="fudoAltarImage"
        gridArea="2/4/6/10"
        backgroundImage={AltarImage}
        backgroundPosition="center"
        objectFit="cover"
      ></GridItem>

      <GridItem as="section" gridArea="1/1/5/13">
        <MemoryGame />
      </GridItem>

      <GridItem
        as="footer"
        id="footerArea"
        gridArea="6/1/7/13"
        backgroundImage={linen}
      >
        <Footer />
      </GridItem>
    </Grid>
  );
}
