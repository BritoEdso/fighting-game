import { nightBorne } from "./characters/nightBorne.js";
import { sonSon } from "./characters/sonSon.js";
import { Game } from "./classes/Game.js";
import { animate } from "./engine/animate.js";
import { countDown, readyCheck, skipReadyCheck } from "./utils.js";
import { setShop, setStage } from "./stages/setStage.js";
// import {tmiClient} from "./twitch/index.js"

// global variables
export const canvas = document.querySelector("canvas");
export const c = canvas.getContext("2d");
export const gravity = 0.8;

export let game;
export let player;
export let enemy;
export let background;
export let shop;
export let skipCheck = false;

// tmiClient.connect().catch(console.error);

// tmiClient.on('message', (message) => {
//   console.log('you suck')
//   console.log(message)
// })

// set main loading stage
canvas.width = 1024;
canvas.height = 576;

const loadingScreen = new Image();
loadingScreen.src = "./img/loading_screen.png";

// set game configurations
const gameConfigs = {
  setStage,
  setShop,
  player: nightBorne,
  enemy: sonSon,
  skip: skipCheck,
};

// load the game
window.addEventListener("load", (e) => {
  game = new Game(gameConfigs);
  game.loadGame();
  player = game.activePlayer;
  enemy = game.activeEnemy;
  background = game.activeStage;
  shop = game.activeAccessories;
  c.drawImage(loadingScreen, 0, 0);
  if (skipCheck) {
    document.getElementById("readyBar").style.display = "none";
    skipReadyCheck();
  }
});

// readyCheck event listener
window.addEventListener("keydown", (event) => {
  if (game.activePlayer.isReady && game.activeEnemy.isReady) {
    window.removeEventListener("keydown", readyCheck);
  } else {
    readyCheck(event, game.activePlayer, game.activeEnemy);
  }
});

// start the game
document.querySelector("#startGame").addEventListener("click", () => {
  document.getElementById("readyBar").style.display = "none";
  animate();
  countDown();
});

// re-start the game

// TODO: Right now it just refreshes the page. Want to make it eventually
// make it add all of the stuff back instead of refreshing

document.querySelector("#restart").addEventListener("click", (e) => {
  window.location.reload();
});

function App() {
  return (
    <body>
      <div style="position: relative; display: inline-block">
        <div id="readyBar" class="anim">
          <div id="readyPlayerOne">Ready?</div>
          <div id="readyEnemyOne">Ready?</div>
          <button style="display: none;" id="startGame" onclick="">
            START
          </button>
          <div id="notReady">Players Not Ready</div>
        </div>
        <div
          style="
        position: absolute;
        display: flex;
        width: 100%;
        align-items: center;
        padding: 20px;
      "
        >
          <div
            style="
          position: relative;
          width: 100%;
          display: flex;
          justify-content: flex-end;
          border-top: 4px solid white;
          border-left: 4px solid white;
          border-bottom: 4px solid white;
        "
          >
            <div style="background-color: red; height: 30px; width: 100%"></div>
            <div
              id="playerHealth"
              style="
            position: absolute;
            background: #818cf8;
            top: 0;
            right: 0;
            bottom: 0;
            width: 100%;
          "
            ></div>
          </div>
          <div
            id="timer"
            style="
          background-color: black;
          width: 100px;
          height: 50px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border: 4px solid white;
        "
          >
            60
          </div>
          <div
            style="
          position: relative;
          width: 100%;
          border-top: 4px solid white;
          border-right: 4px solid white;
          border-bottom: 4px solid white;
        "
          >
            <div style="background-color: red; height: 30px"></div>
            <div
              id="enemyHealth"
              style="
            position: absolute;
            background: #818cf8;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
          "
            ></div>
          </div>
        </div>
        <div
          id="displayText"
          style="
        position: absolute;
        color: white;
        align-items: center;
        justify-content: center;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: none;
      "
        >
          <span>Tie</span>
        </div>
        <button id="restart" style="display: none;" onclick="">
          RESTART
        </button>
        <canvas></canvas>
      </div>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script type="module" src="./index.js"></script>
      <script type="module" src="./twitch/index.js"></script>
      <script type="module" src="./engine/animate.js"></script>
      <script type="module" src="./classes/Fighter.js"></script>
      <script type="module" src="./classes/Sprite.js"></script>
    </body>
  );
}

export default App;
