import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import GameContext from "../Context/GameContext";
import { playTamborineSFX } from "../Sound/SFX";

export default function JumpToggle() {
  const { jumpChance, defaultJumpChance } = useContext(GameContext);
  //In the slider, we'll hide the default value by mapping it to 33
  const [value, setValue] = useState(
    jumpChance.current === defaultJumpChance ? 33 : jumpChance.current
  );

  function handleChange(value) {
    jumpChance.current = value === 33 ? defaultJumpChance : value;
    setValue(value);
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
        <SliderMark
          value={0}
          mt="1"
          ml="-15"
          fontSize="med"
          w={16}
          background={
            value === 0
              ? "linear-gradient(160deg, rgba(85,85,85,0.1) 10%, rgba(72,72,72,0.4) 45%, rgba(72,72,72,0.6) 70%)"
              : ""
          }
          borderRadius={"0px 15px 10px 10px"}
        >
          None
        </SliderMark>
        <SliderMark
          value={33}
          mt="1"
          ml="-5"
          w={16}
          fontSize="med"
          background={
            value === 33
              ? "linear-gradient(160deg, rgba(85,85,85,0.1) 10%, rgba(72,72,72,0.4) 45%, rgba(72,72,72,0.6) 70%)"
              : ""
          }
          borderRadius={"0px 15px 10px 10px"}
        >
          Default
        </SliderMark>
        <SliderMark
          value={66}
          mt="1"
          ml="-15"
          w={16}
          fontSize="med"
          background={
            value === 66
              ? "linear-gradient(160deg, rgba(85,85,85,0.1) 10%, rgba(72,72,72,0.4) 45%, rgba(72,72,72,0.6) 70%)"
              : ""
          }
          borderRadius={"0px 15px 10px 10px"}
        >
          More
        </SliderMark>
        <SliderMark
          value={100}
          mt="1"
          ml="-5"
          w={16}
          fontSize="med"
          background={
            value === 99
              ? "linear-gradient(160deg, rgba(85,85,85,0.1) 10%, rgba(72,72,72,0.4) 45%, rgba(72,72,72,0.6) 70%)"
              : ""
          }
          borderRadius={"0px 15px 10px 10px"}
        >
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
