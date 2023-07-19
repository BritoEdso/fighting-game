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
    this.startBattle = false;
    this.skip = false;
    this.alreadyRan = false;
    this.showHitbox = true;
  }

  // export the active game configs to be used elsewhere
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
    this.readyCheck()

    if((this.activePlayer.isReady && this.activeEnemy.isReady) || this.skip){
      animate();
      this.toggleHitBoxVisualizers();
    }
  }

  loadGame() {
    this.activeStage = this.generateRandomStage();
    this.activePlayer = this.generateRandomPlayer();
    this.activeEnemy = this.generateRandomEnemy();
    this.activeAccessories = this.generateRandomAccessories();
    
  }

  readyCheck() {
    if(this.alreadyRan) return
    if (this.skip) {
      playerControls();
      decreaseTimer();
      document.getElementById("readyBar").remove();
      window.removeEventListener("keydown", this.readyCheck);
      console.log('a')
      this.alreadyRan = true;
    } else {
      window.addEventListener("keyup", (event) => {
        if(event.key === ' '){
          this.activePlayer.setReady();
          console.log('wtf', this.activePlayer.isReady)
            document.getElementById("readyPlayerOne").style.color =
              "lightgreen";
              
        } else if (event.key === "ArrowDown") {
          this.activeEnemy.setReady();
          console.log('wtf', this.activePlayer.isReady)
          console.log('wtf', this.activeEnemy.isReady)
          document.getElementById("readyEnemyOne").style.color = "lightgreen";
        }
        if(this.activeEnemy.isReady && this.activePlayer.isReady) {
          this.startBattle = true
        }

      })

        console.log('bsss', !this.alreadyRan)
        console.log('startBattle?', this.startBattle)
        console.log('player1 ready?', this.activePlayer.isReady)
        console.log('player2 ready?', this.activeEnemy.isReady)



        if (
          this.activePlayer.isReady === true &&
          this.activeEnemy.isReady === true && !this.alreadyRan
        ) {
          console.log('d')
          playerControls();
          decreaseTimer();
          document.getElementById("readyBar").remove();
          window.removeEventListener("keydown", this.readyCheck);
          console.log('c')
          this.alreadyRan = true
        }
        console.log('already ran?', this.alreadyRan)
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
