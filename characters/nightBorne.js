export const nightBorne = {
  position: { x: 100, y: 0 },
  velocity: {
    x: 0,
    y: 0,
  },
  // TODO: figure out how to get rid of this. code was yelling without it
    imageSrc: "./img/NightBorne/NightBorne_idle.png",
    framesMax: 9,
    scale: 2.75,
    damage: 35,
    offset: {
      x: -90,
      y: 30,
    },
  // character hurtbox
  offset: {
    x: 10,
    y: 30,
  },
  sprites: {
    idle: {
      imageSrc: "./img/NightBorne/NightBorne_idle.png",
      framesMax: 9,
      scale: 2.75,
      damage: 35,
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
      scale: 2.3,
      offset: {
        x: -100,
        y: 10,
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
      x: 0,
      y: 50,
    },
    width: 120,
    height: 100,
  },
  // shows the character's hitbox
  showHitbox: false
};
