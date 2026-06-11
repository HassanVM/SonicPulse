import { v4 as uuidv4 } from "uuid";
import beaverCreekAudio from "./assets/songs/Beaver Creek.mp3";
import daylightAudio from "./assets/songs/Daylight.mp3";
import keepGoingAudio from "./assets/songs/Keep Going.mp3";
import nightfallAudio from "./assets/songs/Nightfall.mp3";
import reflectionAudio from "./assets/songs/Reflection.mp3";
import cityStarsAudio from "./assets/songs/Under the City Stars.mp3";
import aiguilleCover from "./assets/covers/Aiguille.jpg";
import swornCover from "./assets/covers/Sworn.jpg";
import canaryForestCover from "./assets/covers/CanaryForest.jpg";

const songsData = [
  {
    name: "Beaver Creek",
    cover: canaryForestCover,
    artist: "Aso, Middle School, Aviino",
    audio: beaverCreekAudio,
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: true,
  },
  {
    name: "Daylight",
    cover: aiguilleCover,
    artist: "Aiguille",
    audio: daylightAudio,
    color: ["#EF8EA9", "#ab417f"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Keep Going",
    cover: swornCover,
    artist: "Swørn",
    audio: keepGoingAudio,
    color: ["#CD607D", "#c94043"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Nightfall",
    cover: aiguilleCover,
    artist: "Aiguille",
    audio: nightfallAudio,
    color: ["#EF8EA9", "#ab417f"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Reflection",
    cover: swornCover,
    artist: "Swørn",
    audio: reflectionAudio,
    color: ["#CD607D", "#c94043"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Under the City Stars",
    cover: canaryForestCover,
    artist: "Aso, Middle School, Aviino",
    audio: cityStarsAudio,
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: false,
  },
];

function chillHop() {
  return songsData;
}

export default chillHop;
