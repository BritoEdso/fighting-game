import { gsap } from "gsap";
import { p1Controls } from "../characters/character_actions/player1-controls.js";
import { p2Controls } from "../characters/character_actions/player2-controls.js";
import {
  background,
  c,
  canvas,
  player,
  enemy,
  shop,
} from "../App.js";
import { lastKey } from "../helper.js";
import {
  determineWinner,
  rectangularCollision,
  timerId,
} from "../utils.js";


export let gameOver = false;

export const animate = () => {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  shop.update();
  c.fillStyle = "rgba(255, 255, 255, 0.15)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();

  player.velocity.x = 0;
  enemy.velocity.x = 0;

  // player movement
  if (p1Controls.a.pressed && lastKey === "a" && player.position.x >= 0) {
    player.velocity.x = -5;
    player.switchSprtie("run");
  } else if (
    p1Controls.d.pressed &&
    lastKey === "d" &&
    player.position.x <= 1024 - player.width
  ) {
    player.velocity.x = 5;
    player.switchSprtie("run");
  } else {
    player.switchSprtie("idle");
  }

  // jumping
  if (player.velocity.y < 0) {
    player.switchSprtie("jump");
  } else if (player.velocity.y > 0) {
    player.switchSprtie("fall");
  }

  // enemy movement
  if (p2Controls.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft" && enemy.position.x >= 0) {
    enemy.velocity.x = -5;
    enemy.switchSprtie("run");
  } else if (p2Controls.ArrowRight.pressed && enemy.lastKey === "ArrowRight" && enemy.position.x <= 1024 - enemy.width) {
    enemy.velocity.x = 5;
    enemy.switchSprtie("runBackwards");
  } else {
    enemy.switchSprtie("idle");
  }

  // jumping
  if (enemy.velocity.y < 0) {
    enemy.switchSprtie("jump");
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprtie("fall");
  }

  //detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy,
      offset: { x: 0, y: 111000 },
    }) &&
    player.isAttacking &&
    player.framesCurrent === 7
  ) {
    enemy.takeHit(player.damage);
    player.isAttacking = false;
    gsap.to("#enemyhealth", {
      width: enemy.health + "%",
    });
  }

  // if player misses
  if (player.isAttacking && player.framesCurrent === 7) {
    player.isAttacking = false;
  }

  // if player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player,
      offset: { x: 100, y: 0 },
    }) &&
    enemy.isAttacking
  ) {
    player.takeHit(enemy.damage);
    enemy.isAttacking = false;
    gsap.to("#playerHealth", {
      width: player.health + "%",
    });
  }

  //if enemy misses
  if (enemy.isAttacking && enemy.framesCurrent === 1) {
    enemy.isAttacking = false;
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId });
  }
};
