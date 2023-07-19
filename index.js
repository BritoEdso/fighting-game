import { nightBorne } from "./characters/nightBorne.js";
import { sonSon } from "./characters/sonSon.js";
import { Game } from "./classes/Game.js";
import { setShop, setStage } from "./stages/setStage.js";

// global variables
export const canvas = document.querySelector("canvas");
export const c = canvas.getContext("2d");
export const gravity = 0.8;

let game;
export let player;
export let enemy;
export let background;
export let shop;

// set main loading stage
canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

// set game configurations
const gameConfigs = {
  setStage,
  setShop,
  player: nightBorne,
  enemy: sonSon,
};

// start the game
document.querySelector("#startGame").addEventListener("click", (e) => {
  game = new Game(gameConfigs);
  game.loadGame();
  player = game.activePlayer;
  enemy = game.activeEnemy;
  background = game.activeStage;
  shop = game.activeAccessories;
  game.startGame();
});