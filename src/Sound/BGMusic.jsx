import { Howl } from "howler";
import { masterVolume } from "../Context/AudioContext";
import SlightBackground from "../Sound/SanjoPalaceBurns/SlightBackground.mp3";
import SlightBackground2 from "../Sound/SanjoPalaceBurns/SlightBackground2.mp3";
import SlightBackground3 from "../Sound/SanjoPalaceBurns/SlightBackground3.mp3";
import SlightBackground4 from "../Sound/SanjoPalaceBurns/SlightBackground4.mp3";

import TendaiTension1 from "../Sound/TendaiTension/TendaiTension1.mp3";
import TendaiTension2 from "../Sound/TendaiTension/TendaiTension2.mp3";
import TendaiTension3 from "../Sound/TendaiTension/TendaiTension3.mp3";
import TendaiTension4 from "../Sound/TendaiTension/TendaiTension4.mp3";

import GomaDo from "../Sound/GomaDo/GomaDo.mp3";

import MeditationCushion from "../Sound/MeditationCushion/MeditationCushion.mp3";

const SanjoPalaceBurns = [
  SlightBackground,
  SlightBackground2,
  SlightBackground3,
  SlightBackground4,
];

const TendaiTension = [
  TendaiTension1,
  TendaiTension2,
  TendaiTension3,
  TendaiTension4,
];

const pickSegment = (howlArray) => {
  return Math.floor(Math.random() * howlArray.length);
};

//Initialize the object shape
let currentMusic = {
  track: new Howl({
    src: [TendaiTension],
  }),
  defaultVolume: 0.45,
};

export function stopCurrentMusic() {
  currentMusic.track.stop();
}

export function updateMusicVolume() {
  currentMusic.track.volume(currentMusic.defaultVolume * masterVolume);
}

export function playSanjoPalaceMusic() {
  const defaultVolume = 0.45;
  const SanjoPalaceMusic = new Howl({
    src: [SanjoPalaceBurns[pickSegment(SanjoPalaceBurns)]],
    autoplay: false,
    loop: false,
    volume: defaultVolume * masterVolume,
    onplay: function () {
      currentMusic = { track: SanjoPalaceMusic, defaultVolume: defaultVolume };
    },
    onend: function () {
      playSanjoPalaceMusic();
    },
  });
  SanjoPalaceMusic.play();
}

export function playTendaiTensionMusic() {
  const defaultVolume = 0.7;
  const TendaiTensionMusic = new Howl({
    src: [TendaiTension[pickSegment(TendaiTension)]],
    autoplay: false,
    loop: false,
    volume: defaultVolume * masterVolume,
    onplay: function () {
      currentMusic = {
        track: TendaiTensionMusic,
        defaultVolume: defaultVolume,
      };
    },
    onend: function () {
      playTendaiTensionMusic();
    },
  });
  TendaiTensionMusic.play();
}

export function playMeditationCushion() {
  const defaultVolume = 0.6;
  const MeditationCushionMusic = new Howl({
    src: [MeditationCushion],
    loop: true,
    volume: defaultVolume * masterVolume,
    onplay: function () {
      currentMusic = {
        track: MeditationCushionMusic,
        defaultVolume: defaultVolume,
      };
    },
  });
  MeditationCushionMusic.play();
}

export function playGomaDoMusic() {
  const defaultVolume = 0.6;
  const GomaDoMusic = new Howl({
    src: [GomaDo],
    autoplay: false,
    loop: true,
    volume: defaultVolume * masterVolume,
    onplay: function () {
      currentMusic = { track: GomaDoMusic, defaultVolume: defaultVolume };
    },
  });
  GomaDoMusic.play();
}
