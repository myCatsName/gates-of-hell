import { Image } from "@chakra-ui/react";
import Noh_drummer from "../Assets/YoungManPlayingaNohDrum4.png";
import { playOM } from "../Sound/SFX";
import { useContext } from "react";
import GameContext from "../Context/GameContext";

export default function NohDrummer() {
  const { stats, setStats } = useContext(GameContext);

  const handleClick = () => {
    playOM();
    setStats({ ...stats, omCount: stats.omCount + 1 });
    console.log("The Noh Drummer Has Been Pressed");
  };

  /*  TODO:
  should have smaller button area inside image to trigger SFX.
  had to add pointerEvents none to allow card clicks.
  full image onclick may be triggered by overlap. */
  return (
    <Image
      src={Noh_drummer}
      className="OverlayImage NohDrummer"
      maxH={"300px"}
      alt="Young Man Playing a Noh Drum"
      position={"absolute"}
      bottom="-3"
      left="-15"
      onClick={handleClick}
      pointerEvents={"none"}
      zIndex={"2"}
    ></Image>
  );
}
