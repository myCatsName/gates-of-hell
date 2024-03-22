import { Howl, Howler } from "howler";
import { masterSFX } from "../Context/AudioContext";

import OM from "../Sound/Effects/jagadamba_om.mp3";
import slap from "../Sound/Effects/jagadamba__slap-11.mp3";
import lock from "../Sound/Effects/jagadamba__door-lock-click.mp3";
import tamborine from "../Sound/Effects/jagadamba__tambourine-1.mp3";
import hauntingDrums from "../Sound/Effects/HauntingDrums0.01.mp3";
import cleansingBell from "../Sound/Effects/ganapataye__04_bells.mp3";
import gongs1 from "../Sound/Effects/10gongs.mp3";
import coinDrop from "../Sound/Effects/CoinDrop.wav";
import doubleTambourine from "../Sound/Effects/doubleTambourine.mp3";

const pooledSFX = new Set();

export function stopCurrentSFX() {
  for (const fx of pooledSFX) {
    fx.track.stop();
  }
  pooledSFX.clear();
}
//TODO: using a set of arbitrary size is not a good approach
export function updateSFXVolume() {
  for (const fx of pooledSFX) {
    fx.track.volume(fx.defaultVolume * masterSFX);
  }
}

export function playOM() {
  const defaultVolume = 0.6;
  const omSFX = new Howl({
    src: [OM],
    volume: masterSFX * defaultVolume,
    onplay: function () {
      pooledSFX.add({ track: omSFX, defaultVolume: defaultVolume });
    },
  });
  omSFX.play();
}

export function playSlapSFX() {
  const defaultVolume = 0.6;
  const slapSFX = new Howl({
    src: [slap],
    volume: masterSFX * defaultVolume,
    rate: 0.7,
    onplay: function () {
      pooledSFX.add({ track: slapSFX, defaultVolume: defaultVolume });
    },
  });
  slapSFX.play();
}

export function playLockSFX() {
  const defaultVolume = 0.4;
  const lockSFX = new Howl({
    src: [lock],
    volume: masterSFX * defaultVolume,
    onplay: function () {
      pooledSFX.add({ track: lockSFX, defaultVolume: defaultVolume });
    },
  });
  lockSFX.play();
}

export function playCleansingBellSFX() {
  const defaultVolume = 4;
  const cleansingBellSFX = new Howl({
    src: [cleansingBell],
    volume: masterSFX * defaultVolume,
    rate: 0.85,
    onplay: function () {
      pooledSFX.add({ track: cleansingBellSFX, defaultVolume: defaultVolume });
    },
  });
  cleansingBellSFX.play();
}

export function playCoinDropSFX() {
  const defaultVolume = 0.8;
  const coinDropSFX = new Howl({
    src: [coinDrop],
    volume: masterSFX * defaultVolume,
    rate: 3,
    onplay: function () {
      pooledSFX.add({ track: coinDropSFX, defaultVolume: defaultVolume });
    },
  });
  coinDropSFX.play();
}

export function playDoubleTamborineSFX() {
  const defaultVolume = 0.7;
  const doubleTambourineSFX = new Howl({
    src: [doubleTambourine],
    volume: masterSFX * defaultVolume,
    rate: 0.5,
    onplay: function () {
      pooledSFX.add({
        track: doubleTambourineSFX,
        defaultVolume: defaultVolume,
      });
    },
  });
  doubleTambourineSFX.play();
}

/* the volume of music is dropped by half when HAUNTINGDRUMSSFX plays as the "win" theme,
so the onend function puts it back up. It works, but fade would be better, and should
not be handled in the SFX anyways. TODO: Make a victory method.*/
export function playHauntingDrumsSFX() {
  const defaultVolume = 2.5;
  const hauntingDrumsSFX = new Howl({
    src: [hauntingDrums],
    volume: masterSFX * defaultVolume,
    rate: 1,
    onplay: function () {
      pooledSFX.add({ track: hauntingDrumsSFX, defaultVolume: defaultVolume });
      Howler.volume(0.5);
    },
    onend: function () {
      Howler.volume(1);
    },
  });
  hauntingDrumsSFX.play();
}

//TODO : Gong SFX is a bit crackly
export function playGongs1SFX() {
  const defaultVolume = 0.4;
  const gongs1SFX = new Howl({
    src: [gongs1],
    volume: masterSFX * defaultVolume,
    rate: 1,
    onplay: function () {
      pooledSFX.add({ track: gongs1SFX, defaultVolume: defaultVolume });
      setTimeout(
        () => gongs1SFX.fade(masterSFX * defaultVolume, 0, 3000),
        2000
      );
    },
  });
  gongs1SFX.play();
}

export function playTamborineSFX() {
  const defaultVolume = 0.2;
  const tamborineSFX = new Howl({
    src: [tamborine],
    volume: masterSFX * defaultVolume,
    rate: 0.85,
    onplay: function () {
      pooledSFX.add({ track: tamborineSFX, defaultVolume: defaultVolume });
    },
  });
  tamborineSFX.play();
}
export function playUnMutableTamborineSFX(freshVolume) {
  const tamborineSFX = new Howl({
    src: [tamborine],
    volume: 0.2 * freshVolume,
    rate: 0.85,
  });
  tamborineSFX.play();
}
