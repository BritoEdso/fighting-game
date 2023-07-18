import { Fighter } from "./classes/Fighter.js";
import { Sprite } from "./classes/Sprite.js";
import {
  rectangularCollision,
  decreaseTimer,
  determineWinner,
} from "./src/utils.js";

export const canvas = document.querySelector("canvas");
export const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);
export const gravity = 0.7;

const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/Background.png",
});

const shop = new Sprite({
  position: {
    x: 600,
    y: 152,
  },
  imageSrc: "./img/shop.png",
  scale: 2.75,
  framesMax: 6,
});

export const player = new Fighter({
  position: { x: 0, y: 0 },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/NightBorne/NightBorne_idle.png",
  framesMax: 9,
  scale: 2.75,
  offset: {
    x: 40,
    y: 30,
  },
  sprites: {
    idle: {
      imageSrc: "./img/NightBorne/NightBorne_idle.png",
      framesMax: 9,
    },
    run: {
      imageSrc: "./img/NightBorne/NightBorne_run.png",
      framesMax: 5,
    },
    jump: {
      imageSrc: "./img/NightBorne/NightBorne_idle.png",
      framesMax: 9,
    },
    fall: {
      imageSrc: "./img/NightBorne/NightBorne_idle.png",
      framesMax: 9,
    },
  },
});

export const enemy = new Fighter({
  position: { x: 400, y: 100 },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "blue",
  offset: {
    x: -50,
    y: 0,
  },
  imageSrc: "./img/MartialHero/Sprites/idle.png",
  framesMax: 8,
  scale: 2,
  offset: {
    x: 0,
    y: -95,
  },
});

enemy.draw();

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};
let lastKey;

decreaseTimer();

const animate = () => {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  shop.update();
  player.update();
  enemy.update();

  player.velocity.x = 0;
  enemy.velocity.x = 0;

  // player movement

  if (keys.a.pressed && lastKey === "a") {
    player.velocity.x = -5;
    player.switchSprtie("run");
  } else if (keys.d.pressed && lastKey === "d") {
    player.velocity.x = 5;
    player.switchSprtie("run");
  } else {
    player.switchSprtie("idle");
  }

  // jumping
  if (player.velocity.y < 0) {
    player.switchSprtie("jump");
  } else if (player.velocity.y > 0) {
    player.switchSprtie("fall")
  }

  // enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
    enemy.velocity.x = -5;
  } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
    enemy.velocity.x = 5;
  }

  //detect for collision
  if (
    rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
    player.isAttacking
  ) {
    player.isAttacking = false;
    enemy.health -= 20;
    document.querySelector("#enemyHealth").style.width = enemy.health + "%";
  }

  if (
    rectangularCollision({ rectangle1: enemy, rectangle2: player }) &&
    enemy.isAttacking
  ) {
    enemy.isAttacking = false;
    player.health -= 20;
    document.querySelector("#playerHealth").style.width = player.health + "%";
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId });
  }
};

animate();

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "w":
      player.velocity.y = -20;
      break;
    case " ":
      player.attack();
      break;

    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      enemy.lastKey = "ArrowRight";
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      enemy.lastKey = "ArrowLeft";
      break;
    case "ArrowUp":
      enemy.velocity.y = -20;
      break;
    case "ArrowDown":
      enemy.isAttacking = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
  }

  switch (event.key) {
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
  }
});
