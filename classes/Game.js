import { animate } from "../engine/animate.js";
import { playerControls } from "../engine/player-controls.js";
import { decreaseTimer } from "../src/utils.js";
import { Fighter } from "./Fighter.js";
import { Sprite } from "./Sprite.js";

export class Game {
  constructor({ setStage, setShop, player, enemy }) {
    this.stage = [new Sprite(setStage)];
    this.stageAccessories = [new Sprite(setShop)];
    this.player = [new Fighter(player)];
    this.enemy = [new Fighter(enemy)];
    this.activeStage = null;
    this.activeAccessories = null;
    this.activePlayer = null;
    this.activeEnemy = null;
    this.skip = false;
    this.showHitbox = true
  }

  activePlayer() {
    return this.activePlayer;
  }
  activeStage() {
    return this.activeStage;
  }
  activeEnemy() {
    return this.activeEnemy;
  }
  activeAccessories() {
    return this.activeAccessories;
  }

  startGame() {
    animate();
    this.readyCheck();
    this.toggleHitBoxVisualizers();
  }

  loadGame() {
    this.activeStage = this.generateRandomStage();
    this.activePlayer = this.generateRandomPlayer();
    this.activeEnemy = this.generateRandomEnemy();
    this.activeAccessories = this.generateRandomAccessories();
  }

  readyCheck(event) {
    if (this.skip) {
      switch (event.key) {
        case " ":
          this.activePlayer.setReady();
          document.getElementById("readyPlayerOne").style.color = "lightgreen";
          break;
        case "ArrowDown":
          this, this.activeEnemy.setReady();
          document.getElementById("readyEnemyOne").style.color = "lightgreen";
          break;
      }

      if (
        this.activePlayer.isReady === true &&
        this.activeEnemy.isReady === true
      ) {
        playerControls();
        decreaseTimer();
        document.getElementById("readyBar").remove();
        window.removeEventListener("keydown");
      }
    } else {
      playerControls();
      decreaseTimer();
      document.getElementById("readyBar").remove();
      window.removeEventListener("keydown", this.readyCheck);
    }
  }

  toggleHitBoxVisualizers() {
    if (this.showHitbox) {
      this.activePlayer.showHitbox = true;
      this.activeEnemy.showHitbox = true;
    } else {
      this.activePlayer.showHitbox = false;
      this.activeEnemy.showHitbox = false;
    }
  }

  // can use these later for random stages and random enemy picks

  generateRandomPlayer() {
    const randomPlayer = Math.floor(Math.random() * this.player.length);
    return this.player[randomPlayer];
  }

  generateRandomEnemy() {
    const randomEnemy = Math.floor(Math.random() * this.enemy.length);
    return this.enemy[randomEnemy];
  }

  generateRandomStage() {
    const randomStage = Math.floor(Math.random() * this.stage.length);
    return this.stage[randomStage];
  }

  generateRandomAccessories() {
    const randomAccessories = Math.floor(
      Math.random() * this.stageAccessories.length
    );
    return this.stageAccessories[randomAccessories];
  }
}
