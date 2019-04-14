import { statesKeys, display } from '../config';

export default class Boot extends Phaser.State {
  constructor() {
    super();
  }

  init() {
    Object.assign(this.scale, display);
  }

  preload() {

  }

  create() {
    this.game.state.start(statesKeys.splash);
  }
}