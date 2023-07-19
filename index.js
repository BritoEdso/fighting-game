import { p1Controls } from "./characters/character_actions/player1-controls.js";
import { p2Controls } from "./characters/character_actions/player2-controls.js";
import { nightBorne } from "./characters/nightBorne.js";
import { sonSon } from "./characters/sonSon.js";
import { Fighter } from "./classes/Fighter.js";
import { Sprite } from "./classes/Sprite.js";
import { animate } from "./engine/animate.js";
import {
  decreaseTimer,

} from "./src/utils.js";
import { setShop, setStage } from "./stages/setStage.js";

export const canvas = document.querySelector("canvas");
export const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);
export const gravity = 0.8;

export const background = new Sprite(setStage);
export const shop = new Sprite(setShop);

export const player = new Fighter(nightBorne);
export const enemy = new Fighter(sonSon);

export let lastKey;

decreaseTimer();
animate();

window.addEventListener("keydown", (event) => {
  //player movement
  if (!player.dead) {
    switch (event.key) {
      case "d":
        p1Controls.d.pressed = true;
        lastKey = "d";
        break;
      case "a":
        p1Controls.a.pressed = true;
        lastKey = "a";
        break;
      case "w":
        player.velocity.y = -20;
        break;
      case " ":
        player.attack();
        break;
    }
  }

  //enemy movement
  if (!enemy.dead) {
    switch (event.key) {
      case "ArrowRight":
        p2Controls.ArrowRight.pressed = true;
        enemy.lastKey = "ArrowRight";
        break;
      case "ArrowLeft":
        p2Controls.ArrowLeft.pressed = true;
        enemy.lastKey = "ArrowLeft";
        break;
      case "ArrowUp":
        enemy.velocity.y = -20;
        break;
      case "ArrowDown":
        enemy.attack();
        break;
    }
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      p1Controls.d.pressed = false;
      break;
    case "a":
      p1Controls.a.pressed = false;
      break;
  }

  switch (event.key) {
    case "ArrowRight":
      p2Controls.ArrowRight.pressed = false;
      break;
    case "ArrowLeft":
      p2Controls.ArrowLeft.pressed = false;
      break;
  }
});
