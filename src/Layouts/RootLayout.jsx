//react
import { Grid, GridItem } from "@chakra-ui/react";

//pages
import Footer from "./Footer";
import { Headline } from "../Pages/Altar";
import MemoryGame from "../Components/MemoryGame";
import StatsPanel from "../Components/StatsPanel";

//assets
import headerLinen from "../Assets/Swatches/possible_header_background.webp";
import linen from "../Assets/Swatches/lightToDarkLinen.png";
import AltarImage from "../Assets/Fudo_Altar_Medium.webp";
import SidePanels from "./SidePanel";

export default function RootLayout() {
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
        <Headline />
        <StatsPanel />
      </GridItem>

      <SidePanels />

      <GridItem
        id="fudoAltarImage"
        gridArea="2/4/6/10"
        backgroundImage={AltarImage}
        backgroundPosition="50% 45%"
      />

      <GridItem gridArea="1/1/5/13">
        <MemoryGame />
      </GridItem>

      <GridItem id="footerArea" gridArea="6/1/7/13" backgroundImage={linen}>
        <Footer />
      </GridItem>
    </Grid>
  );
}
