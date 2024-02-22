import { Box } from "@chakra-ui/react";
import greenSwatch from "../Assets/Swatches/newGreenSwatch.webp";

export default function TrackSelectedToast({ trackname }) {
  return (
    <Box
      color="red.800"
      background={"#565656"}
      border="3px solid black"
      boxShadow="0px 4px 2px brown"
      backgroundImage={greenSwatch}
      fontWeight={"bold"}
      textAlign={"center"}
      textShadow={"dark-lg"}
      p={3}
    >
      <span>Now Playing {trackname}</span>
    </Box>
  );
}
