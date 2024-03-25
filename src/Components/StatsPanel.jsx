import { Box } from "@chakra-ui/core";
import GameContext from "../Context/GameContext";
import { useContext } from "react";

export default function StatsPanel() {
  const { stats } = useContext(GameContext);

  return (
    <Box
      className="Stats"
      style={{
        fontSize: "large",
        color: "black",
        textAlign: "left",
        position: "absolute",
        bottom: "0px",
        fontFamily: "Slackside One",
      }}
    >
      <ul style={{ listStyle: "none" }}>
        <li>OMs : {stats.omCount}</li>
        {stats.perfectCycles > 0 && (
          <li>Perfect Cycles : {stats.perfectCycles}</li>
        )}
        <li>Cycles Cleared : {stats.cycleCount}</li>
      </ul>
    </Box>
  );
}
