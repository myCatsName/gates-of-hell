import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useContext } from "react";
import GameContext from "../Context/GameContext";

export default function JumpToggle() {
  const { allowJumps, setAllowJumps } = useContext(GameContext);
  function handleChange() {
    setAllowJumps((prev) => !prev);
  }

  return (
    <>
      <FormControl>
        <FormLabel>Allow Jumpscares?</FormLabel>
        <Switch
          id="jump-toggle"
          isChecked={allowJumps}
          colorScheme="yellow"
          size={"lg"}
          onChange={handleChange}
        />
      </FormControl>
    </>
  );
}
