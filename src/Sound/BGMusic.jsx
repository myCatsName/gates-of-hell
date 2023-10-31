import { Howl } from "howler";
import SlightBackground from "../Sound/SanjoPalaceBurns/SlightBackground.mp3";
import SlightBackground2 from "../Sound/SanjoPalaceBurns/SlightBackground2.mp3";
import SlightBackground3 from "../Sound/SanjoPalaceBurns/SlightBackground3.mp3";
import SlightBackground4 from "../Sound/SanjoPalaceBurns/SlightBackground4.mp3";

import TendaiTension1 from "../Sound/TendaiTension/TendaiTension1.mp3";
import TendaiTension2 from "../Sound/TendaiTension/TendaiTension2.mp3";
import TendaiTension3 from "../Sound/TendaiTension/TendaiTension3.mp3";
import TendaiTension4 from "../Sound/TendaiTension/TendaiTension4.mp3";

import GomaDo from "../Sound/GomaDo/GomaDo.mp3";

const slightBackgroundSegment = [
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

export function playSlightBackgroundMusic() {
  const SlightBackgroundMusic = new Howl({
    src: [slightBackgroundSegment[pickSegment(slightBackgroundSegment)]],
    autoplay: false,
    loop: false,
    volume: 0.45,
    onend: function () {
      SlightBackgroundMusic.stop();
      playSlightBackgroundMusic();
    },
  });
  SlightBackgroundMusic.play();
}

export function playTendaiTensionMusic() {
  const TendaiTensionMusic = new Howl({
    src: [TendaiTension[pickSegment(TendaiTension)]],
    autoplay: false,
    loop: false,
    volume: 0.7,
    onend: function () {
      TendaiTensionMusic.stop();
      playTendaiTensionMusic();
    },
  });
  TendaiTensionMusic.play();
}

export function playGomaDoMusic() {
  const GomaDoMusic = new Howl({
    src: [GomaDo],
    autoplay: false,
    loop: true,
    volume: 0.6,
  });
  GomaDoMusic.play();
}

export const SanjoPalaceMusic = new Howl({
  src: [slightBackgroundSegment[pickSegment(slightBackgroundSegment)]],
  autoplay: false,
  loop: false,
  volume: 0.5,
  onend: function () {
    SanjoPalaceMusic.stop();
    SanjoPalaceMusic.play();
  },
});

export const TendaiTensionMusic = new Howl({
  src: [TendaiTension[pickSegment(TendaiTension)]],
  autoplay: false,
  loop: false,
  volume: 0.6,
  onend: function () {
    TendaiTensionMusic.stop();
    TendaiTensionMusic.play();
  },
});

export const GomaDoMusic = new Howl({
  src: [GomaDo],
  autoplay: false,
  loop: true,
  volume: 0.6,
});
