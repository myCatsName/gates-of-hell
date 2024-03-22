import { createContext, useEffect, useState } from "react";

import { playSanjoPalaceMusic, updateMusicVolume } from "../Sound/BGMusic";
import { updateSFXVolume } from "../Sound/SFX";

const AudioContext = createContext();

export let masterVolume = 1;
export let masterSFX = 1;

export function AudioProvider({ children }) {
  const [musicVolume, setMusicVolume] = useState(100);
  const [sfxVolume, setSFXVolume] = useState(100);

  useEffect(() => {
    masterVolume = musicVolume * 0.01;
    updateMusicVolume();
  }, [musicVolume]);

  useEffect(() => {
    masterSFX = sfxVolume * 0.01;
    updateSFXVolume();
  }, [sfxVolume]);

  //Night Attack on Sanjo Palace theme on game load
  useEffect(() => {
    playSanjoPalaceMusic();
  }, []);

  return (
    <AudioContext.Provider
      value={{
        musicVolume,
        setMusicVolume,
        sfxVolume,
        setSFXVolume,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export default AudioContext;
