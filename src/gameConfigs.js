import { setShop, setStage } from "./stages/setStage.js";
import { nightBorne } from "./characters/nightBorne.js";
import { sonSon } from "./characters/sonSon.js";

export const gameConfigs = {
    setStage,
    setShop,
    player: nightBorne,
    enemy: sonSon,
    skip: false,
  };