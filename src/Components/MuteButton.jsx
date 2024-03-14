import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { Howler } from "howler";
import { useContext } from "react";
import AudioContext from "../Context/AudioContext";
import {
  playTamborineSFX,
  playUnMutableTamborineSFX,
  stopCurrentSFX,
} from "../Sound/SFX";
import { stopCurrentMusic } from "../Sound/BGMusic";

export default function MuteButton() {
  const { muteMusic, setMuteMusic, muteSFX, setMuteSFX } =
    useContext(AudioContext);

  const handleChange = (type) => {
    if (type === "music") {
      stopCurrentMusic();
      playTamborineSFX();
      setMuteMusic((prev) => !prev);
      console.log(`Background Music (${muteMusic ? "unmuted" : "muted"})`);
    }
    if (type === "sfx") {
      stopCurrentSFX();
      setMuteSFX((prev) => !prev);
      //TODO: sfx should play when muteSFX toggles to false, but uses stale data (volume(0))
      muteSFX && playUnMutableTamborineSFX();
      console.log(`Sound Effects (${muteSFX ? "unmuted" : "muted"})`);
    }
  };

  return (
    <>
      <FormControl>
        <FormLabel>Mute Music</FormLabel>
        <Switch
          id="mute-music"
          colorScheme="yellow"
          size={"lg"}
          isChecked={muteMusic}
          onChange={() => {
            handleChange("music");
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Mute SFX</FormLabel>
        <Switch
          id="mute-SFX"
          colorScheme="yellow"
          size={"lg"}
          isChecked={muteSFX}
          onChange={() => handleChange("sfx")}
        />
      </FormControl>
    </>
  );
}
