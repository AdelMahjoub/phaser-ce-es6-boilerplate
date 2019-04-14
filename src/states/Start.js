import { statesKeys } from '../config';

export default class Start extends Phaser.State {
  constructor() {
    super();
  }

  create() {
    this.__createBackground();
    this.__createTitle();
    this.__createPrompt();
    this.input.onTap.addOnce(this.__startGame, this);
  }

  __createBackground() {
    let rect = this.make.graphics(0, 0);
    rect.beginFill(0x1d2b53);
    rect.drawRect(0, 0, this.game.width, this.game.height);
    rect.endFill();
    this.add.image(0, 0, rect.generateTexture());
  }

  __createTitle() {
    let text = this.make.text(0, 0, 'GAME TITLE', { font: '64px Arial', fill: 'white' });
    let title = this.add.image(0, 0, text.generateTexture());
    title.anchor.set(0.5);
    title.tint = 0xffa300;
    title.x = this.game.width / 2;
    title.y = this.game.height / 3;
  }

  __createPrompt() {
    let text = this.make.text(0, 0, '', { font: '32px Arial', fill: 'white' });
    text.text = this.game.device.desktop ? 'CLICK TO START' : 'TAP TO START';
    let prompt = this.add.image(0, 0, text.generateTexture());
    prompt.anchor.set(0.5);
    prompt.tint = 0xffec27;
    prompt.x = this.game.width / 2;
    prompt.y = this.game.height * 2 / 3;
    this.add.tween(prompt).to({ alpha: 0 }, 800, Phaser.Easing.Linear.None, true, 0, -1, true);
  }

  __startGame() {
    this.state.start(statesKeys.main);
  }
}