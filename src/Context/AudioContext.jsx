import { createContext, useEffect, useState } from "react";

import { playSanjoPalaceMusic } from "../Sound/BGMusic";

const AudioContext = createContext();
export let mute = false;
export let muteFX = false;

export function AudioProvider({ children }) {
  const [muteMusic, setMuteMusic] = useState(false);
  const [muteSFX, setMuteSFX] = useState(false);

  useEffect(() => {
    mute = muteMusic;
  }, [muteMusic]);

  useEffect(() => {
    muteFX = muteSFX;
  }, [muteSFX]);

  //Night Attack on Sanjo Palace theme on game load
  useEffect(() => {
    playSanjoPalaceMusic();
  }, []);

  return (
    <AudioContext.Provider
      value={{
        muteMusic,
        setMuteMusic,
        muteSFX,
        setMuteSFX,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export default AudioContext;
