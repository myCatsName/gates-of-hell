import { Howler } from "howler";
import { useState } from "react";
import FooterButton from "./FooterButton";
import { useToast } from "@chakra-ui/react";
import TrackSelectedToast from "./TrackPlayingToast";

//Audio track names
import {
  playTendaiTensionMusic,
  playSlightBackgroundMusic,
  playGomaDoMusic,
  playMeditationCushion,
  // SlightBackgroundMusic,
  // TendaiTensionMusic,
  // GomaDoMusic,
} from "../Sound/BGMusic";

const backgroundAudioTrack = [
  playSlightBackgroundMusic,
  playTendaiTensionMusic,
  playMeditationCushion,
  playGomaDoMusic,
];

// The audio really needs to be re-done to allow fx and bg to control separate

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
    // backgroundAudio.forEach((track) => track.stop);
    Howler.stop();
    setCurrentBGAudio((currentBGAudio + 1) % backgroundAudioTrack.length);
    console.log(`Now playing ${backgroundAudio[currentBGAudio]}`);
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
