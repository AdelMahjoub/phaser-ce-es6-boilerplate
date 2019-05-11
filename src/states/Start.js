import { statesKeys, assetsKeys } from '../config';

export default class Start extends Phaser.State {
  constructor() {
    super();

    /**@type {Phaser.TileSprite} */
    this.__tiledBg = null;

    /**@type {Phaser.BitmapText} */
    this.__title = null;
  }

  create() {
    this.__tiledBg = this.add.tileSprite(
      0, 0,
      this.game.width, this.game.height,
      assetsKeys.atlases.main, assetsKeys.tiledBgs.starsPurple
    );

    this.__title = this.add.bitmapText(0, 0, assetsKeys.fonts.neuropol, 'PHASER-CE\nBOILERPLATE', 72);
    this.__title.align = 'center';
    this.__title.anchor.set(.5);
    this.__title.position.set(this.game.width / 2, this.game.height / 3);

    this.__startBtn = this.add.button(
      0, 0,
      assetsKeys.atlases.main,
      this.__startGame, this,
      ...Object.keys(assetsKeys.buttons.blue).map(key => assetsKeys.buttons.blue[key])
    );
    this.__startBtn.anchor.set(.5);
    this.__startBtn.scale.set(2);
    this.__startBtn.position.set(this.game.width / 2, this.game.height * 2 / 3);

    let startBtnLabel = this.add.bitmapText(0, 0, assetsKeys.fonts.neuropol, 'START', 72);
    startBtnLabel.anchor.set(.5);
    startBtnLabel.scale.set(.6);
    startBtnLabel.position.set(this.__startBtn.position.x, this.__startBtn.position.y);
  }

  __startGame() {
    this.state.start(statesKeys.Main);
  }
}