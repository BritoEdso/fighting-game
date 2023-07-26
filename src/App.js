import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { nightBorne } from "./characters/nightBorne.js";
import { sonSon } from "./characters/sonSon.js";
import { Game } from "./classes/Game.js";
import { animate } from "./engine/animate.js";
import { countDown, readyCheck, skipReadyCheck } from "./utils.js";
import { setShop, setStage } from "./stages/setStage.js";
import { ReadyBar } from "./components/readyCheck.js";
import { PlayerHealth } from "./components/playerHealth.js";
import { EnemyHealth } from "./components/enemyHealth.js";
import { Timer } from "./components/timer.js";
import { DisplayText } from "./components/displayText.js";
import { RestartButton } from "./components/restartButton.js";
import { gameConfigs } from "./gameConfigs.js";
import { useRef } from "react";
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

const MainDiv = styled.div`
position: relative;
display: inline-block;
`;

const ChildDivOfMainDivWhoIsAGreatDiv = styled.div`
position: absolute;
display: flex;
  width: 100%;
  align-items: center;
  padding: 20px;
  `;
// tmiClient.connect().catch(console.error);

// tmiClient.on('message', (message) => {
  //   console.log('you suck')
  //   console.log(message)
  // })
export function App() {

  const canvasRef = useRef(null)
  const [context, setContext] = useState();
  const [canvas, setCanvas] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setCanvas(canvas);
    setContext(context);
  }, []);
  
// set main loading stage
canvas.width = 1024;
canvas.height = 576;

const loadingScreen = new Image();
loadingScreen.src = "./img/loading_screen.png";

// set game configurations

// load the game
window.addEventListener("load", (e) => {
  game = new Game(gameConfigs);
  game.loadGame();
  player = game.activePlayer;
  enemy = game.activeEnemy;
  background = game.activeStage;
  shop = game.activeAccessories;
  context.drawImage(loadingScreen, 0, 0);
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

  return (
    <MainDiv>
      <ChildDivOfMainDivWhoIsAGreatDiv>
        <ReadyBar />
        <PlayerHealth />
        <Timer />
        <EnemyHealth />
        <DisplayText />
        <RestartButton />
        <canvas currentRef={canvasRef}></canvas>
      </ChildDivOfMainDivWhoIsAGreatDiv>
      </MainDiv>
  );
}

export default App;
