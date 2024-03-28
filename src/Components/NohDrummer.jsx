import { Image } from "@chakra-ui/react";
import Noh_drummer from "../Assets/YoungManPlayingaNohDrum4.webp";
import { playOM } from "../Sound/SFX";
import { useContext } from "react";
import GameContext from "../Context/GameContext";

export default function NohDrummer() {
  const { setStats } = useContext(GameContext);

  const handleClick = () => {
    playOM();
    setStats((stats) => ({ ...stats, omCount: stats.omCount + 1 }));
  };

  /*  TODO:
  should have smaller button area inside image to trigger SFX.
  had to add pointerEvents none to allow card clicks.
  full image onclick may be triggered by overlap. */
  return (
    <Image
      src={Noh_drummer}
      className="OverlayImage noh-drummer"
      maxH={"300px"}
      alt="Young Man Playing a Noh Drum"
      position={"absolute"}
      bottom="-3"
      left="-15"
      onClick={handleClick}
      pointerEvents={"none"}
    ></Image>
  );
}
