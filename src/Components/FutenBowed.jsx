import { Image } from "@chakra-ui/react";
import Futen_Bowed from "../Assets/Futen_bowed_trans.webp";
import { playOM } from "../Sound/SFX";
import { useContext } from "react";
import GameContext from "../Context/GameContext";
import { masterSFX } from "../Context/AudioContext";

export default function FutenBowed() {
  const { setStats } = useContext(GameContext);

  const handleClick = () => {
    playOM();
    masterSFX !== 0 &&
      setStats((stats) => ({ ...stats, omCount: stats.omCount + 1 }));
  };

  return (
    <Image
      className="OverlayImage futen-bows"
      src={Futen_Bowed}
      alt="The monk Futen bows"
      position={"absolute"}
      bottom="2"
      right="10"
      onClick={handleClick}
    />
  );
}
