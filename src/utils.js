import { toggleGameOver } from "../engine/end-match.js";
import { player, enemy } from "../index.js";

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