//react
import { Grid, GridItem } from "@chakra-ui/react";
import { useContext } from "react";
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
import greenSwatch from "../Assets/Swatches/greenSquaresSwatch.png";
import bloodyeyes from "../Assets/Swatches/bloodyeyes.png";

const sidePanelSwatch = [redSwatch, greenSwatch, bloodyeyes];

export default function RootLayout() {
  const { bgArtTheme } = useContext(ThemeContext);
  const sidepanelArt = sidePanelSwatch[bgArtTheme % sidePanelSwatch.length];

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(5,1fr) auto" // 3.5em" //footer high enough for text
    >
      <GridItem
        as="header"
        backgroundImage={headerLinen}
        backgroundRepeat={"no-repeat"}
        bgSize={"cover"}
        gridArea="1/4/2/10"
        textAlign="center"
        fontSize="6xl"
        // fontSize="4em"
        style={{ position: "relative" }}
      >
        <Altar />
        <StatsPanel />
      </GridItem>

      <GridItem
        as="section"
        backgroundImage={sidepanelArt}
        gridArea="1/1/6/4"
      ></GridItem>

      <GridItem
        as="section"
        backgroundImage={sidepanelArt}
        gridArea="1/10/6/13"
      ></GridItem>

      <GridItem
        as="main"
        backgroundImage={AltarImage}
        backgroundPosition="center"
        objectFit="cover"
        gridArea="2/4/6/10"
      ></GridItem>

      <GridItem as="section" gridArea="1/1/5/13">
        <MemoryGame />
      </GridItem>

      <GridItem
        as="footer"
        height="100vh"
        backgroundImage={linen}
        gridArea="6/1/7/13"
      >
        <Footer />
      </GridItem>
    </Grid>
  );
}
