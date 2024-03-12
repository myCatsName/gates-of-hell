import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { Howler } from "howler";
import { useState } from "react";

export default function MuteButton() {
  const [muted, setMuted] = useState(Howler._muted);

  const handleChange = () => {
    Howler.mute(!Howler._muted);
    setMuted((prev) => !prev);
    console.log(`Background Howl.mute(${Howler._muted})`);
  };

  return (
    <>
      <FormControl>
        <FormLabel>Mute Sound</FormLabel>
        <Switch
          id="mute-music"
          colorScheme="yellow"
          size={"lg"}
          isChecked={muted}
          onChange={handleChange}
        />
      </FormControl>
    </>
  );
}
