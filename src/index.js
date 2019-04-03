require(`expose-loader?PIXI!${__PIXI__}`);
require(`expose-loader?p2!${__p2__}`);
require(`expose-loader?Phaser!${__Phaser__}`);

import './index.css';

/**@type {Phaser.State} */
const state = { init, preload, create, update };

/**@type {Phaser.Game} */
const game = new Phaser.Game(640, 360, Phaser.AUTO, 'root', state);

/**@type {Phaser.Sprite} */
let player;

/**@type {Phaser.CursorKeys} */
let cursorkeys;

function init() {
  // Crisp display if using pixel arts
  // Phaser.Canvas.setImageRenderingCrisp(game.canvas);
  // game.renderer.renderSession.roundPixels = true;
  game.scale.minWidth = game.canvas.width / 2;
  game.scale.minHeight = game.canvas.height / 2;
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignVertically = true;
  game.scale.pageAlignHorizontally = true;
  game.scale.onOrientationChange.add(() => { game.scale.refresh() });
  game.scale.onSizeChange.add(() => { game.scale.refresh() });
}

function preload() {
  game.load.atlas('atlas', 'assets/atlas.png', 'assets/atlas.json');
  game.load.image('debug-grid', 'assets/debug-grid-1920x1920.png');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.add.tileSprite(0, 0, 1920, 1920, 'debug-grid');

  game.world.setBounds(0, 0, 1920, 1920);

  player = game.add.sprite(0, 0, 'atlas', 'P32x32.png');
  player.anchor.set(0.5);
  player.x = game.world.centerX;
  player.y = game.world.centerY;
  game.physics.arcade.enable(player);
  player.body.collideWorldBounds = true;

  game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

  cursorkeys = game.input.keyboard.createCursorKeys();
}

function update() {

  if (cursorkeys.up.isDown) {
    player.body.velocity.y = -200;
  } else if (cursorkeys.down.isDown) {
    player.body.velocity.y = 200;
  } else {
    player.body.velocity.y = 0;
  }

  if (cursorkeys.left.isDown) {
    player.body.velocity.x = -200;
  } else if (cursorkeys.right.isDown) {
    player.body.velocity.x = 200;
  } else {
    player.body.velocity.x = 0;
  }

}