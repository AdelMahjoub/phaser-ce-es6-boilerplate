import { statesKeys } from '../config';

export default class Splash extends Phaser.State {
  constructor() {
    super();
  }

  preload() {

  }

  create() {
    this.game.state.start(statesKeys.preload);
  }
}