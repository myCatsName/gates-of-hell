// Might display in Header section
// Should use localStorage to track history
/* Should display 
    - OMs
    - Cycles cleared
    - Perfect clears (Clear the board without triggering Sting card in Hell mode)
    - Fudo Summoned (Number of Stings)
*/

import { Box } from "@chakra-ui/core";
import GameContext from "../Context/GameContext";
import { useContext } from "react";

export default function StatsPanel() {
  const { omCount, cycleCount, perfectCycles } = useContext(GameContext);

  return (
    <Box
      className="Stats"
      style={{
        fontSize: "small",
        color: "black",
        textAlign: "left",
        position: "absolute",
        bottom: "0px",
      }}
    >
      <ul>OMs : {omCount}</ul>
      <ul>Perfect Cycles : {perfectCycles}</ul>
      <ul>Cycles Cleared : {cycleCount}</ul>
    </Box>
  );
}
