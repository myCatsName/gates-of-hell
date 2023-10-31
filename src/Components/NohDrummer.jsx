import { Image } from "@chakra-ui/react";
import Noh_drummer from "../Assets/YoungManPlayingaNohDrum4.png";
import { playOM, hauntingDrumsSFX } from "../Sound/SFX";

export default function NohDrummer() {
  const handleClick = () => {
    playOM();
    console.log("The Noh Drummer Has Been Pressed");
  };

  //should have smaller button area inside image to trigger SFX,
  //full image onclick may be triggered by overlap.
  return (
    <Image
      src={Noh_drummer}
      maxH={"300px"}
      alt="Young Man Playing a Noh Drum"
      position={"absolute"}
      bottom="-3"
      left="-15"
      onClick={handleClick}
      zIndex={0}
    ></Image>
  );
}
