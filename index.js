import { Fighter } from "./classes/Fighter.js";
import { Sprite } from "./classes/Sprite.js";
import {
  rectangularCollision,
  decreaseTimer,
  determineWinner,
  timerId,
} from "./src/utils.js";

export const canvas = document.querySelector("canvas");
export const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);
export const gravity = 0.8;

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
  position: { x: 100, y: 0 },
  velocity: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/NightBorne/NightBorne_idle.png",
  framesMax: 9,
  scale: 2.75,
  offset: {
    x: 10,
    y: 30,
  },
  sprites: {
    idle: {
      imageSrc: "./img/NightBorne/NightBorne_idle.png",
      framesMax: 9,
      scale: 2.75,
      offset: {
        x: -90,
        y: 30,
      },
    },
    run: {
      imageSrc: "./img/NightBorne/NightBorne_run.png",
      scale: 2.75,
      framesMax: 5,
      offset: {
        x: -90,
        y: 30,
      },
    },
    jump: {
      imageSrc: "./img/NightBorne/NightBorne_idle.png",
      framesMax: 9,
      offset: {
        x: -90,
        y: 30,
      },
    },
    fall: {
      imageSrc: "./img/NightBorne/NightBorne_idle.png",
      framesMax: 9,
      offset: {
        x: -90,
        y: 30,
      },
    },
    attack: {
      imageSrc: "./img/NightBorne/NightBorne_attack.png",
      framesMax: 12,
      offset: {
        x: 0,
        y: -15,
      },
    },
    takeHit: {
      imageSrc: "./img/NightBorne/NightBorne_takeHit.png",
      scale: 2,
      framesMax: 5,
      offset: {
        x: -100,
        y: 42,
      },
    },
    death: {
      imageSrc: "./img/NightBorne/NightBorne_death.png",
      scale: 2,
      framesMax: 24,
      offset: {
        x: -100,
        y: -20,
      },
    },
  },
  attackbox: {
    offset: {
      x: 140,
      y: 50,
    },
    width: 120,
    height: 100,
  },
  hitBox: {
    position: {
      x: 1000,
      y: 0,
    },
    width: 10020,
    height: 100,
  },
});

export const enemy = new Fighter({
  position: { x: 800, y: 100 },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "blue",
  offset: {
    x: 50,
    y: 0,
  },
  imageSrc: "./img/SonSon/SonSon_idle.png",
  framesMax: 6,
  scale: 1,
  offset: {
    x: -10,
    y: 90,
  },
  sprites: {
    idle: {
      imageSrc: "./img/SonSon/SonSon_idle.png",
      framesMax: 6,
      framesHold: 20,
    },
    run: {
      imageSrc: "./img/SonSon/SonSon_runForward.png",
      framesMax: 1,
    },
    runBackwards: {
      imageSrc: "./img/SonSon/SonSon_runBackwards.png",
      framesMax: 1,
    },
    jump: {
      imageSrc: "./img/SonSon/SonSon_jump.png",
      framesMax: 1,
    },
    fall: {
      imageSrc: "./img/SonSon/SonSon_fall.png",
      framesMax: 1,
    },
    attack: {
      imageSrc: "./img/SonSon/SonSon_attack.png",
      framesMax: 4,
    },
    takeHit: {
      imageSrc: "./img/SonSon/SonSon_TakeHit.png",
      framesMax: 2,
      framesHold: 60,

    },
    death: {
      imageSrc: "./img/SonSon/SonSon_death.png",
      scale: 0,
      framesHold: 60,
      framesMax: 4,
      offset: {
        x: 0,
        y: 90,
      },
    },
  },
  attackbox: {
    offset: {
      x: 40,
      y: 100,
    },
    width: 25,
    height: 40,
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
    player.switchSprtie("fall");
  }

  // enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
    enemy.velocity.x = -5;
    enemy.switchSprtie("run");
  } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
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
    enemy.takeHit();
    player.isAttacking = false;
    document.querySelector("#enemyHealth").style.width = enemy.health + "%";
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
    player.takeHit();
    enemy.isAttacking = false;
    document.querySelector("#playerHealth").style.width = player.health + "%";
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

animate();

window.addEventListener("keydown", (event) => {
  //player movement

  if (!player.dead) {
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
    }
  }

  //enemy movement
  if (!enemy.dead) {
    switch (event.key) {
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
        enemy.attack();
        break;
    }
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
