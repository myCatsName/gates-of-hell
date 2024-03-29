import { Howl, Howler } from "howler";

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
    volume: 0.6,
  });
  omSFX.play();
}

export const slapSFX = new Howl({
  src: [slap],
  volume: 0.6,
  rate: 0.7,
});

export const lockSFX = new Howl({
  src: [lock],
  volume: 0.4,
});
export const tamborineSFX = new Howl({
  src: [tamborine],
  volume: 0.2,
  rate: 0.85,
});

export const cleansingBellSFX = new Howl({
  src: [cleansingBell],
  volume: 4,
  rate: 0.85,
});

export const coinDropSFX = new Howl({
  src: [coinDrop],
  volume: 0.8,
  rate: 3,
});

export const doubleTambourineSFX = new Howl({
  src: [doubleTambourine],
  volume: 0.7,
  rate: 0.5,
});

/* the volume of music is dropped by half when HAUNTINGDRUMSSFX plays as the "win" theme,
 so the onend function puts it back up. It works, but fade would be better, and should
 not be handled in the SFX anyways. TODO: Make a victory method.*/
export const hauntingDrumsSFX = new Howl({
  src: [hauntingDrums],
  volume: 2.5,
  rate: 1,
  onend: function () {
    Howler.volume(1);
  },
});

//Gong SFX is a bit Fubar TODO : check sound pool size, fix volume FUBAR.
export const gongs1SFX = new Howl({
  src: [gongs1],
  volume: 0.4,
  rate: 1,
  onplay: function () {
    setTimeout(() => gongs1SFX.fade(gongs1SFX.volume(), 0, 3000), 2000);
  },
  onfade: function () {
    gongs1SFX.stop();
    gongs1SFX.volume(0.4);
  },
});
