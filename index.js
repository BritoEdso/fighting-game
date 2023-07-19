import { nightBorne } from "./characters/nightBorne.js";
import { sonSon } from "./characters/sonSon.js";
import { Fighter } from "./classes/Fighter.js";
import { Sprite } from "./classes/Sprite.js";
import { animate } from "./engine/animate.js";
import { playerControls } from "./engine/player-controls.js";
import { decreaseTimer } from "./src/utils.js";
import { setShop, setStage } from "./stages/setStage.js";

export const canvas = document.querySelector("canvas");
export const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);
export const gravity = 0.8;

export const background = new Sprite(setStage);
export const shop = new Sprite(setShop);

export const player = new Fighter(nightBorne); //swapping the player characters breaks the game
export const enemy = new Fighter(sonSon);

// exported variables are immutable. helper function allows controls.js to function
// note: enemy doesn't require lastkey for some reason
export let lastKey;
export const lastKeyHelper = (arg) => {
  lastKey = arg;
};

const loadGame = () => {
  animate();
};

//init load
loadGame();
console.log("dog")
const skipReadyCheck = () => {
  playerControls();
  decreaseTimer();
  document.getElementById("readyBar").remove();
  window.removeEventListener("keydown", readyCheck);
};

function readyCheck(event) {
  console.log(event.key);
  switch (event.key) {
    case " ":
      player.setReady();
      document.getElementById("readyPlayerOne").style.color = "lightgreen";
      break;
    case "ArrowDown":
      enemy.setReady();
      document.getElementById("readyEnemyOne").style.color = "lightgreen";
      break;
  }

  if (player.isReady === true && enemy.isReady === true) {
    playerControls();
    decreaseTimer();
    document.getElementById("readyBar").remove();
    window.removeEventListener("keydown", readyCheck);
  }
}

window.addEventListener("keydown", readyCheck);

skipReadyCheck();

const toggleHitBoxVisualizers = () => {
  if (player.showHitbox === false) {
    player.showHitbox = true;
    enemy.showHitbox = true;
  } else {
    player.showHitbox = false;
    enemy.showHitbox = false;
  }
};

toggleHitBoxVisualizers();