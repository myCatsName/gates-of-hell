import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useContext } from "react";
import GameContext from "../Context/GameContext";
import { playTamborineSFX } from "../HelperFx/SFX";

export default function JumpToggle() {
  const { jumpChance, defaultJumpChance } = useContext(GameContext);

  //In the slider, we'll hide the default value by mapping it to 33
  function handleChange(value) {
    jumpChance.current = value === 33 ? defaultJumpChance : value;
    playTamborineSFX();
  }

  return (
    <div
      style={{
        padding: "10px 20px 15px 20px",
        width: "100%",
        textAlign: "center",
        userSelect: "none",
      }}
    >
      <h2 style={{ fontWeight: "bold", fontSize: "1.8rem" }}>Jump Scares</h2>
      <Slider
        defaultValue={
          jumpChance.current === defaultJumpChance ? 33 : jumpChance.current
        }
        min={0}
        max={99}
        step={33}
        colorScheme="yellow"
        onChange={(value) => handleChange(value)}
      >
        <SliderMark value={0} mt="1" ml="-15" fontSize="med">
          None
        </SliderMark>
        <SliderMark value={33} mt="1" ml="-5" fontSize="med">
          Default
        </SliderMark>
        <SliderMark value={66} mt="1" ml="-15" fontSize="med">
          More
        </SliderMark>
        <SliderMark value={100} mt="1" ml="-5" fontSize="med">
          Always
        </SliderMark>
        <SliderTrack bg={"blackAlpha.500"}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb bg={"goldenrod"} />
      </Slider>
    </div>
  );
}
