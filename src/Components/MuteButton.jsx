import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { Howler } from "howler";
import { useContext } from "react";
import AudioContext from "../Context/AudioContext";
import { playTamborineSFX } from "../Sound/SFX";

export default function MuteButton() {
  const { muteMusic, setMuteMusic, muteSFX, setMuteSFX } =
    useContext(AudioContext);

  //TODO: sfx should play when muteSFX toggles to false, but plays with stale data (volume(0))
  const handleChange = (type) => {
    if (type === "music") {
      Howler.stop();
      playTamborineSFX();
      setMuteMusic((prev) => !prev);
      console.log(`Background Music (${muteMusic ? "unmuted" : "muted"})`);
    }
    if (type === "sfx") {
      setMuteSFX((prev) => !prev);
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
