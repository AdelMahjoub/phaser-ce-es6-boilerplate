import { assetsKeys } from '../config';

export default class main extends Phaser.State {
  constructor() {
    super();

    /**@type {Phaser.CursorKeys} */
    this.__cursorKeys = null;

    /**@type {Phaser.TileSprite} */
    this.__tiledBg = null;

    /**@type {Phaser.Sprite} */
    this.__spaceShip = null;

    /**@type {Phaser.Weapon} */
    this.__weapon = null;
  }

  init() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  }

  create() {
    this.__cursorKeys = this.input.keyboard.createCursorKeys();
    this.input.keyboard.addKeyCapture([Phaser.KeyCode.SPACEBAR]);

    this.__tiledBg = this.add.tileSprite(
      0, 0,
      this.game.width, this.game.height,
      assetsKeys.atlases.main, assetsKeys.tiledBgs.starsBlue
    );

    this.__spaceShip = this.add.sprite(
      0, 0,
      assetsKeys.atlases.main, assetsKeys.sprites.spaceShip
    );
    this.__spaceShip.scale.set(.5);
    this.__spaceShip.anchor.set(.5);
    this.__spaceShip.position.set(this.game.width / 2, this.game.height / 2);
    this.game.physics.enable(this.__spaceShip);
    this.__spaceShip.body.drag.set(100);
    this.__spaceShip.body.maxVelocity.set(300);

    this.__weapon = this.add.weapon(20, assetsKeys.atlases.main, assetsKeys.bullets.laser);
    this.__weapon.fireRate = 150;
    this.__weapon.bulletSpeed = 600;
    this.__weapon.bullets.setAll('scale.x', .5);
    this.__weapon.bullets.setAll('scale.y', .5);
    this.__weapon.trackSprite(this.__spaceShip, 50, 0, true);
  }

  update() {
    if (this.__cursorKeys.left.isDown) {
      this.__spaceShip.body.angularVelocity = -300;
    } else if (this.__cursorKeys.right.isDown) {
      this.__spaceShip.body.angularVelocity = 300;
    } else {
      this.__spaceShip.body.angularVelocity = 0;
    }

    if (this.__cursorKeys.up.isDown) {
      this.game.physics.arcade.accelerationFromRotation(this.__spaceShip.rotation, 300, this.__spaceShip.body.acceleration);
    } else {
      this.__spaceShip.body.acceleration.set(0);
    }

    if (this.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
      this.__weapon.fire();
    }

    this.__screenWrap(this.__spaceShip);

  }

  /**
   * 
   * @param {Phaser.Sprite} sprite 
   */
  __screenWrap(sprite) {

    if (sprite.x < 0) {
      sprite.x = this.game.width;
    }
    else if (sprite.x > this.game.width) {
      sprite.x = 0;
    }

    if (sprite.y < 0) {
      sprite.y = this.game.height;
    }
    else if (sprite.y > this.game.height) {
      sprite.y = 0;
    }

  }
}