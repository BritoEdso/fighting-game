import { player, enemy } from "../App.js";
import { p1Controls } from "../characters/character_actions/player1-controls.js";
import { p2Controls } from "../characters/character_actions/player2-controls.js";
import { lastKeyHelper } from "../helper.js";


export const playerControls = () => {
  window.addEventListener("keydown", (event) => {
    //player movement
    if (!player.dead) {
      switch (event.key) {
        case "d":
          p1Controls.d.pressed = true;
          lastKeyHelper("d");
          break;
        case "a":
          p1Controls.a.pressed = true;
          lastKeyHelper("a");
          break;
        case "w":
          if (player.velocity.y === 0) {
            player.velocity.y = -20;
          }
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
          if (enemy.velocity.y === 0) {
            enemy.velocity.y = -20;
          }
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
};
