import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { playUnMutableTamborineSFX } from "../HelperFx/SFX";

export default function VolumeSlider({
  name,
  volume,
  setter,
  playTamborine = false,
}) {
  const handleChange = (value) => {
    setter(value);
    playTamborine && playUnMutableTamborineSFX(value * 0.01);
  };

  return (
    <div
      style={{
        padding: "0px 10px 5px 10px",
        width: "100%",
        textAlign: "center",
        userSelect: "none",
      }}
    >
      <h2 style={{ fontWeight: "bold", fontSize: "1.8rem" }}>{name}</h2>
      <Slider
        defaultValue={volume}
        min={0}
        max={100}
        step={10}
        colorScheme="yellow"
        onChange={(value) => handleChange(value)}
      >
        <SliderMark value={0} mt="1" fontSize="med">
          {volume >= 10 ? "Mute" : ""}
        </SliderMark>
        <SliderMark value={100} mt="1" fontSize="med">
          {volume !== 100 ? "Max" : ""}
        </SliderMark>
        <SliderMark
          value={volume}
          textAlign="center"
          bg="linear-gradient(160deg, rgba(85,85,85,0.1) 10%, rgba(72,72,72,0.4) 45%, rgba(72,72,72,0.6) 70%)"
          borderRadius={"0px 15px 10px 10px"}
          mt="1"
          w="12"
        >
          {volume === 0 ? "Mute" : volume === 100 ? "Max" : `${volume}%`}
        </SliderMark>
        <SliderTrack bg={"blackAlpha.500"}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb bg={"goldenrod"} />
      </Slider>
    </div>
  );
}
