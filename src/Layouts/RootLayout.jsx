//react
import { Grid, GridItem } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import ThemeContext from "../Context/ThemeContext";

//pages
import Footer from "./Footer";
import { Altar } from "../Pages/Altar";
import { MemoryGame } from "../Components/MemoryGame";
import StatsPanel from "../Components/StatsPanel";

//assets
import AltarImage from "../Assets/Acala_at_Buddha_Tooth_Relic_Temple_Redder.JPG";
import headerLinen from "../Assets/Swatches/possible_header_background.png";
import linen from "../Assets/Swatches/lightToDarkLinen.png";

import redSwatch from "../Assets/Swatches/background_swatch.png";
import greenSwatch from "../Assets/Swatches/newGreenSwatch.png";
import bloodyeyes from "../Assets/Swatches/bloodyeyes.png";

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
  });

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(4,1fr) 1fr minmax(10vh, 20fr)" // (6,1fr) // 3.5em" //footer high enough for text
    >
      <GridItem
        as="header"
        backgroundImage={headerLinen}
        bgSize={"cover"}
        gridArea="1/4/2/10"
        style={{ position: "relative" }}
      >
        <Altar />
        <StatsPanel />
      </GridItem>

      <GridItem
        as="section"
        backgroundColor={"black"}
        backgroundImage={`url(${require("../Assets/Swatches/" +
          sidepanelArt)})`}
        gridArea="1/1/6/4"
      ></GridItem>

      <GridItem
        as="section"
        backgroundColor={"black"}
        backgroundImage={`url(${require("../Assets/Swatches/" +
          sidepanelArt)})`}
        gridArea="1/10/6/13"
      ></GridItem>

      <GridItem
        as="main"
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
        gridArea="6/1/7/13"
        backgroundImage={linen}

        // height={"10vh"}
        // height="100svh"
        // width={"100vw"}
        // position="fixed"
        // bottom="0"
      >
        <Footer />
      </GridItem>
    </Grid>
  );
}
