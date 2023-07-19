import { Fighter } from "./Fighter";
import { Sprite } from "./Sprite";

export class Game {
  constructor({ sprite, fighter, audioSrc }) {
    this.audio = new Audio();
    this.audio.src = audioSrc;
    this.sprite = new Sprite();
    this.fighter = new Fighter();
  }

  startGame() {
    c.fillRect(0, 0, canvas.width, canvas.height);
    const shop = new Sprite({
      position: {
        x: 600,
        y: 152,
      },
      imageSrc: "./img/shop.png",
      scale: 2.75,
      framesMax: 6,
    });
  }

  player1
}
