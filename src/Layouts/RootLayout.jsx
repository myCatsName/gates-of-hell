import "../App.css";

//react
import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

//pages
import Footer from "./Footer";
import { Altar } from "../Pages/Altar";
import { MemoryGame } from "../Components/MemoryGame";
import StatsPanel from "../Components/StatsPanel";

//assets
import AltarImage from "../Assets/Acala_at_Buddha_Tooth_Relic_Temple_Redder.JPG";
import redSwatch from "../Assets/Swatches/background_swatch.png";
import headerLinen from "../Assets/Swatches/possible_header_background.png";
import linen from "../Assets/Swatches/lightToDarkLinen.png";
import greenSwatch from "../Assets/Swatches/greenSquaresSwatch.png";
import bloodyeyes from "../Assets/Swatches/bloodyeyes.png";

export default function RootLayout() {
  const [sidepanelTheme, setSidePanelTheme] = useState(redSwatch);

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(5,1fr) 3.5em" //footer height enough for text
      bg="gray"
    >
      <GridItem
        as="header"
        backgroundImage={headerLinen}
        backgroundRepeat={"no-repeat"}
        bgSize={"cover"}
        gridArea="1/4/2/10"
        textAlign="center"
        fontSize="6xl"
        style={{ position: "relative" }}
      >
        <Altar />
        <StatsPanel />
      </GridItem>

      <GridItem
        as="section"
        // h="100vh"
        backgroundImage={sidepanelTheme}
        gridArea="1/1/6/4"
      ></GridItem>

      <GridItem
        as="section"
        backgroundImage={sidepanelTheme}
        gridArea="1/10/6/13"
      ></GridItem>

      <GridItem
        as="main"
        backgroundImage={AltarImage}
        backgroundPosition="center"
        gridArea="2/4/6/10"
        textAlign="center"
        alignItems="center"
        justifyItems="center"
      ></GridItem>

      <GridItem as="section" gridArea="1/1/5/13">
        <MemoryGame />
      </GridItem>

      <GridItem
        as="footer"
        height="100vh"
        textAlign={"center"}
        backgroundImage={linen}
        gridArea="6/1/7/13"
      >
        <Footer />
      </GridItem>
    </Grid>
  );
}
