import { nightBorne } from "./characters/nightBorne.js";
import { sonSon } from "./characters/sonSon.js";
import { Game } from "./classes/Game.js";
import { Sprite } from "./classes/Sprite.js";
import { setLoading, setShop, setStage } from "./stages/setStage.js";

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
const loadingScreen = new Image()
loadingScreen.src = './img/loading_screen.png'

loadingScreen.onload = function(){
    c.drawImage(loadingScreen, 0, 0)
}

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