// import { Fighter } from "./Fighter";
// import { Sprite } from "./Sprite";

// export class Game {
//   constructor({ sprite, fighter, audioSrc }) {
//     this.audio = new Audio();
//     this.audio.src = audioSrc;
//     this.sprite = new Sprite();
//     this.fighter = new Fighter();
//   }

//   startGame() {
//     c.fillRect(0, 0, canvas.width, canvas.height);
//     const shop = new Sprite({
//       position: {
//         x: 600,
//         y: 152,
//       },
//       imageSrc: "./img/shop.png",
//       scale: 2.75,
//       framesMax: 6,
//     });
//   }

//   player1(){
//     this.fighter({
//         position: { x: 100, y: 0 },
//         velocity: {
//           x: 0,
//           y: 0,
//         },
//         imageSrc: "./img/NightBorne/NightBorne_idle.png",
//         framesMax: 9,
//         scale: 2.75,
//         offset: {
//           x: 10,
//           y: 30,
//         },
//         sprites: {
//           idle: {
//             imageSrc: "./img/NightBorne/NightBorne_idle.png",
//             framesMax: 9,
//             scale: 2.75,
//             offset: {
//               x: -90,
//               y: 30,
//             },
//           },
//           run: {
//             imageSrc: "./img/NightBorne/NightBorne_run.png",
//             scale: 2.75,
//             framesMax: 5,
//             offset: {
//               x: -90,
//               y: 30,
//             },
//           },
//           jump: {
//             imageSrc: "./img/NightBorne/NightBorne_idle.png",
//             framesMax: 9,
//             offset: {
//               x: -90,
//               y: 30,
//             },
//           },
//           fall: {
//             imageSrc: "./img/NightBorne/NightBorne_idle.png",
//             framesMax: 9,
//             offset: {
//               x: -90,
//               y: 30,
//             },
//           },
//           attack: {
//             imageSrc: "./img/NightBorne/NightBorne_attack.png",
//             framesMax: 12,
//             offset: {
//               x: 0,
//               y: -15,
//             },
//           },
//           takeHit: {
//             imageSrc: "./img/NightBorne/NightBorne_takeHit.png",
//             scale: 2,
//             framesMax: 5,
//             offset: {
//               x: -100,
//               y: 42,
//             },
//           },
//           death: {
//             imageSrc: "./img/NightBorne/NightBorne_death.png",
//             scale: 2,
//             framesMax: 24,
//             offset: {
//               x: -100,
//               y: -20,
//             },
//           },
//         },
//         attackbox: {
//           offset: {
//             x: 140,
//             y: 50,
//           },
//           width: 120,
//           height: 100,
//         },
//         hitBox: {
//           position: {
//             x: 1000,
//             y: 0,
//           },
//           width: 10020,
//           height: 100,
//         },
//       });
//   }

//   player2(){
//     this.fighter({
//         position: { x: 800, y: 100 },
//         velocity: {
//           x: 0,
//           y: 0,
//         },
//         color: "blue",
//         offset: {
//           x: 50,
//           y: 0,
//         },
//         imageSrc: "./img/SonSon/SonSon_idle.png",
//         framesMax: 6,
//         scale: 1,
//         offset: {
//           x: -10,
//           y: 90,
//         },
//         sprites: {
//           idle: {
//             imageSrc: "./img/SonSon/SonSon_idle.png",
//             framesMax: 6,
//             framesHold: 20,
//           },
//           run: {
//             imageSrc: "./img/SonSon/SonSon_runForward.png",
//             framesMax: 1,
//           },
//           runBackwards: {
//             imageSrc: "./img/SonSon/SonSon_runBackwards.png",
//             framesMax: 1,
//           },
//           jump: {
//             imageSrc: "./img/SonSon/SonSon_jump.png",
//             framesMax: 1,
//           },
//           fall: {
//             imageSrc: "./img/SonSon/SonSon_fall.png",
//             framesMax: 1,
//           },
//           attack: {
//             imageSrc: "./img/SonSon/SonSon_attack.png",
//             framesMax: 4,
//           },
//           takeHit: {
//             imageSrc: "./img/SonSon/SonSon_TakeHit.png",
//             framesMax: 2,
//             framesHold: 60,
      
//           },
//           death: {
//             imageSrc: "./img/SonSon/SonSon_death.png",
//             scale: 0,
//             framesHold: 60,
//             framesMax: 4,
//             offset: {
//               x: 0,
//               y: 90,
//             },
//           },
//         },
//         attackbox: {
//           offset: {
//             x: 40,
//             y: 100,
//           },
//           width: 25,
//           height: 40,
//         },
//       });
//   }
// }
