import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { Howler } from "howler";

export default function MuteButton() {
  const handleChange = () => {
    Howler.mute(!Howler._muted);
    console.log(`Background Howl.mute(${Howler._muted})`);
  };

  return (
    <>
      <FormControl>
        <FormLabel>Mute Music</FormLabel>
        <Switch
          id="mute-music"
          colorScheme="yellow"
          size={"lg"}
          onChange={handleChange}
        />
      </FormControl>
    </>
  );
}
