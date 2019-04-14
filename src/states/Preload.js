import { statesKeys } from '../config';

export default class Preload extends Phaser.State {
  constructor() {
    super();
  }

  preload() {

  }

  create() {
    this.game.state.start(statesKeys.start);
  }
}