import { Image } from "@chakra-ui/react";
import Futen_Bowed from "../Assets/Futen_bowed_trans.png";
import { playOM } from "../Sound/SFX";
import { useContext } from "react";
import GameContext from "../Context/GameContext";

export default function FutenBowed() {
  const { stats, setStats } = useContext(GameContext);
  const handleClick = () => {
    playOM();
    setStats({ ...stats, omCount: stats.omCount + 1 });
    console.log("Futen Has Been Pressed");
  };

  return (
    <Image
      className="OverlayImage FutenBows"
      src={Futen_Bowed}
      alt="The monk Futen bows"
      position={"absolute"}
      bottom="2"
      right="10"
      onClick={handleClick}
      zIndex="2"
    />
  );
}
