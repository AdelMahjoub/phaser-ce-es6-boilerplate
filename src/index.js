import { config, statesKeys } from './config';

import Boot from './states/Boot';
import Preload from './states/Preload';
import Start from './states/Start';
import Main from './states/Main';

class Game extends Phaser.Game {
  /**
   * 
   * @param {Phaser.IGameConfig} config 
   */
  constructor(config) {
    super(config);
    const states = {
      Boot: Boot,
      Preload: Preload,
      Start: Start,
      Main: Main
    }
    for (let key of Object.keys(states)) {
      this.state.add(key, states[key]);
    }
  }
  __run(...params) {
    this.state.start(statesKeys.Boot, true, false, ...params);
  }
}

const game = new Game(config);
game.__run();