import { Howler } from "howler";
import { useState } from "react";
import FooterButton from "./FooterButton";
import { useToast } from "@chakra-ui/react";
import TrackSelectedToast from "./TrackPlayingToast";

import {
  playTendaiTensionMusic,
  playSanjoPalaceMusic,
  playGomaDoMusic,
  playMeditationCushion,
} from "../Sound/BGMusic";

import { playSlapSFX as sfxOnClick } from "../Sound/SFX";

const backgroundAudioTrack = [
  playSanjoPalaceMusic,
  playTendaiTensionMusic,
  playMeditationCushion,
  playGomaDoMusic,
];

//Audio track names
const backgroundAudio = [
  `"Sanjo Palace Burning"`,
  `"Tendai Tension"`,
  `"Meditation Cushion"`,
  `"GomaDo Theme"`,
];

export default function TrackSelector() {
  const [currentBGAudio, setCurrentBGAudio] = useState(1);
  const toast = useToast();
  const handleClick = () => {
    Howler.stop();
    sfxOnClick();
    setCurrentBGAudio((currentBGAudio + 1) % backgroundAudioTrack.length);
    toast({
      position: "bottom-left",
      duration: 1500,
      title: "now playing",
      render: () => (
        <TrackSelectedToast trackname={backgroundAudio[currentBGAudio]} />
      ),
    });
    backgroundAudioTrack[currentBGAudio]();
  };

  return <FooterButton onClick={handleClick}>Music</FooterButton>;
}
