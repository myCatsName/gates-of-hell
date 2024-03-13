import { createContext, useEffect, useState } from "react";

import { playSanjoPalaceMusic } from "../Sound/BGMusic";

const AudioContext = createContext();
export let mute = false;
export let muteFX = false;

export function AudioProvider({ children }) {
  const [audioTrack, setAudioTrack] = useState();
  const [muteMusic, setMuteMusic] = useState(false);
  const [muteSFX, setMuteSFX] = useState(false);

  useEffect(() => {
    console.log(audioTrack);
  }, [audioTrack]);

  useEffect(() => {
    mute = muteMusic;
  }, [muteMusic]);

  useEffect(() => {
    muteFX = muteSFX;
  }, [muteSFX]);

  //Night Attack on Sanjo Palace theme on game load
  useEffect(() => {
    setAudioTrack(playSanjoPalaceMusic());
  }, []);

  return (
    <AudioContext.Provider
      value={{
        audioTrack,
        setAudioTrack,
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
