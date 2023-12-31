import { c, canvas, gravity } from "../index.js";
import { gameOver } from "../src/helper.js";
import { Sprite } from "./Sprite.js";

export class Fighter extends Sprite {
  constructor({
    position,
    velocity,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    sprites,
    attackbox = { offset: {}, width: undefined, height: undefined },
  }) {
    super({
      position,
      imageSrc,
      scale,
      framesMax,
      offset,
    });
    this.showHitbox; //shows the hitbox
    this.isReady, 
    this.velocity = velocity;
    this.width = 50;
    this.height = 150;
    this.lastKey;
    this.attackbox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackbox.offset,
      width: attackbox.width,
      height: attackbox.height,
    };
    this.hitBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackbox.offset,
      width: attackbox.width,
      height: attackbox.height,
    };
    this.isAttacking;
    this.health = 100;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 10;
    this.sprites = sprites;
    this.dead = false;

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
  }

  setReady() {
    this.isReady = true;
  }

  update() {
    this.draw();
    if (!this.dead) this.animateFrame();

    // attack boxes
    this.attackbox.position.x = this.position.x + this.attackbox.offset.x;
    this.attackbox.position.y = this.position.y + this.attackbox.offset.y;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    //  show hitbox logic
    if (this.showHitbox) {
      c.fillRect(
        this.attackbox.position.x,
        this.attackbox.position.y,
        this.attackbox.width,
        this.attackbox.height
      );

      // show hitbox
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    // gravity stuff
    if (this.position.y + this.height + this.velocity.y >= canvas.height - 70) {
      this.velocity.y = 0;
      this.position.y = 357;
    } else {
      this.velocity.y += gravity;
    }
  }

  attack() {
    this.switchSprtie("attack");
    this.isAttacking = true;
  }

  takeHit(damage = 20) {
    if (gameOver === false) {
      this.health -= damage;
      if (this.health <= 0) {
        this.switchSprtie("death");
      } else {
        this.switchSprtie("takeHit");
      }}
  }

  switchSprtie(sprite) {
    if (this.image === this.sprites.death.image) {
      if (this.framesCurrent === this.sprites.death.framesMax - 1)
        this.dead = true;
      return;
    }
    //override when attacking
    if (
      this.image === this.sprites.attack.image &&
      this.framesCurrent < this.sprites.attack.framesMax - 1
    ) {
      return;
    }

    //override when hit taken
    if (
      this.image === this.sprites.takeHit.image &&
      this.framesCurrent < this.sprites.takeHit.framesMax - 1
    ) {
      return;
    }
    switch (sprite) {
      case "idle":
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image;
          this.framesMax = this.sprites.idle.framesMax;
          this.offset = this.sprites.idle.offset || this.offset;
          this.framesHold = this.sprites.idle.framesHold || this.framesHold;
          this.scale = this.sprites.idle.scale || this.scale;
          this.damage = this.sprites.idle.damage || this.damage;
          this.framesCurrent = 0;
        }
        break;
      case "run":
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image;
          this.framesMax = this.sprites.run.framesMax;
          this.scale = this.sprites.run.scale || this.scale;
          this.offset = this.sprites.run.offset || this.offset;
          this.framesCurrent = 0;
        }
        break;
      case "jump":
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image;
          this.framesMax = this.sprites.jump.framesMax;
          this.offset = this.sprites.jump.offset || this.offset;
          this.framesCurrent = 0;
        }
        break;
      case "fall":
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image;
          this.framesMax = this.sprites.fall.framesMax;
          this.offset = this.sprites.fall.offset || this.offset;
          this.framesCurrent = 0;
        }
        break;
      case "attack":
        if (this.image !== this.sprites.attack.image) {
          this.image = this.sprites.attack.image;
          this.framesMax = this.sprites.attack.framesMax;
          this.offset = this.sprites.attack.offset || this.offset;
          this.scale = this.sprites.attack.scale || this.scale;
          this.framesCurrent = 0;
        }
        break;
      case "runBackwards":
        if (this.image !== this.sprites.runBackwards.image) {
          this.image = this.sprites.runBackwards.image;
          this.framesMax = this.sprites.runBackwards.framesMax;
          this.offset = this.sprites.runBackwards.offset || this.offset;
          this.framesCurrent = 0;
        }
        break;
      case "takeHit":
        if (this.image !== this.sprites.takeHit.image) {
          this.image = this.sprites.takeHit.image;
          this.framesMax = this.sprites.takeHit.framesMax;
          this.framesHold = this.sprites.takeHit.framesHold || this.framesHold;
          this.offset = this.sprites.takeHit.offset || this.offset;
          this.scale = this.sprites.takeHit.scale || this.scale;
          this.framesCurrent = 0;
        }
        break;
      case "death":
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image;
          this.framesMax = this.sprites.death.framesMax;
          this.framesHold = this.sprites.death.framesHold || this.framesHold;
          this.offset = this.sprites.death.offset || this.offset;
          this.scale = this.sprites.death.scale || this.scale;
          this.framesCurrent = 0;
        }
        break;
    }
  }
}
