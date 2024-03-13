import { Howl, Howler } from "howler";
import { muteFX as muteSFX } from "../Context/AudioContext";

import OM from "../Sound/Effects/jagadamba_om.mp3";
import slap from "../Sound/Effects/jagadamba__slap-11.mp3";
import lock from "../Sound/Effects/jagadamba__door-lock-click.mp3";
import tamborine from "../Sound/Effects/jagadamba__tambourine-1.mp3";
import hauntingDrums from "../Sound/Effects/HauntingDrums0.01.mp3";
import cleansingBell from "../Sound/Effects/ganapataye__04_bells.mp3";
import gongs1 from "../Sound/Effects/10gongs.mp3";
import coinDrop from "../Sound/Effects/CoinDrop.wav";
import doubleTambourine from "../Sound/Effects/doubleTambourine.mp3";

export function playOM() {
  const omSFX = new Howl({
    src: [OM],
    volume: muteSFX ? 0 : 0.6,
  });
  omSFX.play();
}

export function playSlapSFX() {
  const slapSFX = new Howl({
    src: [slap],
    volume: muteSFX ? 0 : 0.6,
    rate: 0.7,
  });
  slapSFX.play();
}

export function playLockSFX() {
  const lockSFX = new Howl({
    src: [lock],
    volume: muteSFX ? 0 : 0.4,
  });
  lockSFX.play();
}

export function playCleansingBellSFX() {
  const cleansingBellSFX = new Howl({
    src: [cleansingBell],
    volume: muteSFX ? 0 : 4,
    rate: 0.85,
  });
  cleansingBellSFX.play();
}

export function playCoinDropSFX() {
  const coinDropSFX = new Howl({
    src: [coinDrop],
    volume: muteSFX ? 0 : 0.8,
    rate: 3,
  });
  coinDropSFX.play();
}

export function playDoubleTamborineSFX() {
  const doubleTambourineSFX = new Howl({
    src: [doubleTambourine],
    volume: muteSFX ? 0 : 0.7,
    rate: 0.5,
  });
  doubleTambourineSFX.play();
}

/* the volume of music is dropped by half when HAUNTINGDRUMSSFX plays as the "win" theme,
so the onend function puts it back up. It works, but fade would be better, and should
not be handled in the SFX anyways. TODO: Make a victory method.*/
export function playHauntingDrumsSFX() {
  const hauntingDrumsSFX = new Howl({
    src: [hauntingDrums],
    volume: muteSFX ? 0 : 2.5,
    rate: 1,
    onend: function () {
      Howler.volume(1);
    },
  });
  hauntingDrumsSFX.play();
}

//Gong SFX is a bit Fubar TODO : check sound pool size, fix volume FUBAR.
export function playGongs1SFX() {
  const gongs1SFX = new Howl({
    src: [gongs1],
    volume: muteSFX ? 0 : 0.4,
    rate: 1,
    onplay: function () {
      setTimeout(() => gongs1SFX.fade(gongs1SFX.volume(), 0, 3000), 2000);
    },
    onfade: function () {
      gongs1SFX.stop();
      gongs1SFX.volume(0.4);
    },
  });
  gongs1SFX.play();
}

export function playTamborineSFX() {
  const tamborineSFX = new Howl({
    src: [tamborine],
    volume: muteSFX ? 0 : 0.2,
    rate: 0.85,
  });
  tamborineSFX.play();
}
