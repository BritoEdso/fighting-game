export const sonSon = {
  position: { x: 800, y: 100 },
  velocity: {
    x: 0,
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
      x: 0,
      y: 100,
    },
    width: 25,
    height: 40,
  },
};
