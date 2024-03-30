import JumpToggle from "../Components/JumpToggle";
import VolumeSlider from "../Components/VolumeSlider";
import { useContext } from "react";
import AudioContext from "../Context/AudioContext";

export default function OptionsPage() {
  const { musicVolume, setMusicVolume, sfxVolume, setSFXVolume } =
    useContext(AudioContext);
  return (
    <div
      className="optionsModal"
      style={{
        display: "flex",
        flexDirection: "column",
        margin: " 0em 1em",
        gap: "2em",
      }}
    >
      <JumpToggle />
      <VolumeSlider
        name={"Music Volume"}
        volume={musicVolume}
        setter={setMusicVolume}
      />
      <VolumeSlider
        name={"SFX Volume"}
        volume={sfxVolume}
        setter={setSFXVolume}
        playTamborine="true"
      />
    </div>
  );
}
