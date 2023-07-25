import { player, enemy, game } from "../index.js";
import { toggleGameOver } from "./helper.js";

export const rectangularCollision = ({ rectangle1, rectangle2, offset }) => {

  return (
    rectangle1.attackbox.position.x + rectangle1.attackbox.width >=
      rectangle2.position.x &&
    rectangle1.attackbox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackbox.position.y + rectangle1.attackbox.height >=
      rectangle2.position.y &&
    rectangle1.attackbox.position.y <= rectangle2.position.y + rectangle2.height
  );
};

export const determineWinner = ({ player, enemy, timerId }) => {
  clearTimeout(timerId);
  document.querySelector("#displayText").style.display = "flex";
  document.querySelector("#restart").style.display = "flex";

  if (player.health === enemy.health) {
    document.querySelector("#displayText").innerHTML = "Tie";
    toggleGameOver()
  } else if (player.health > enemy.health) {
    document.querySelector("#displayText").innerHTML = "Player 1 Wins!";
    toggleGameOver()
  } else if (player.health < enemy.health) {
    document.querySelector("#displayText").innerHTML = "Player 2 Wins!";
    toggleGameOver()
  }
};

let timer = 60;
export let timerId;
export const decreaseTimer = () => {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timer--;
    document.querySelector("#timer").innerHTML = timer;
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerId });
  }
};

export let countdown = 4
export const countDown = () => {
  document.querySelector("#displayText").style.display = "flex";
  if(countdown > 1) {
    setTimeout(countDown, 1000)
    countdown--;
    document.querySelector("#displayText").innerHTML = `${countdown}!`;
  } else if (countdown === 1){
    setTimeout(countDown, 1000)
    countdown--;
    document.querySelector("#displayText").innerHTML = `FIGHT!`
  } else if(countdown === 0) {
    document.querySelector("#displayText").style.display = "none";
    return game.startGame()
  }
}

export const skipReadyCheck = () => {
  return game.skipCheck()
}

export const readyCheck = (event, player, enemy) => {
  if (event.key === " ") {
    player.setReady();
    document.getElementById("readyPlayerOne").style.color = "lightgreen";

    } if (event.key === "ArrowDown") {
      enemy.setReady();
      document.getElementById("readyEnemyOne").style.color = "lightgreen";
    }

    if(!player.isReady && enemy.isReady) {
      document.getElementById("notReady").textContent = "Player 1 is Not Ready";
    }else  if(player.isReady && !enemy.isReady) {
      document.getElementById("notReady").textContent = "Player 2 is Not Ready";
    } else {      
      document.getElementById("notReady").style.color = "lightgreen";
      document.querySelector("#startGame").style.display = "flex";
      document.getElementById("notReady").textContent = 'Press "Start" to Begin!';
    }
};

