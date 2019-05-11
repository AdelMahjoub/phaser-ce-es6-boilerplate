import { statesKeys } from '../config';

export default class Preload extends Phaser.State {
  constructor() {
    super();
  }

  preload() {
    let assets = this.cache.getJSON('assets');
    for (let item of assets) {
      let args = Object.keys(item.args).map(key => item.args[key]);
      this.load[item.type](...args);
    }
    this.load.onLoadComplete.addOnce(this.__onLoadComplete, this);
  }

  create() {
    this.game.state.start(statesKeys.Start);
  }

  __onLoadComplete() {
    document.body.removeChild(document.querySelector('.spinner'));
  }
}