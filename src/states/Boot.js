import { statesKeys, display } from '../config';

export default class Boot extends Phaser.State {
  constructor() {
    super();
  }

  init() {
    Object.assign(this.scale, display);
  }

  preload() {
    this.load.json('assets', 'assets/data/assets.json');
  }

  create() {
    this.game.state.start(statesKeys.Preload);
  }
}