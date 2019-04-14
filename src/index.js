import 'pixi';
import 'p2';
import 'phaser';

import { config, statesKeys } from './config';

import Boot from './states/Boot';
import Splash from './states/Splash';
import Preload from './states/Preload';
import Start from './states/Start';
import Main from './states/Main';

import './index.css';

window.PhaserGlobal = {};

const states = {
  boot: Boot,
  splash: Splash,
  preload: Preload,
  start: Start,
  main: Main
}

class Game extends Phaser.Game {
  /**
   * 
   * @param {Phaser.IGameConfig} config 
   */
  constructor(config) {
    super(config);
    for (let key of Object.keys(states)) {
      this.state.add(key, states[key]);
    }
  }
  __run(...params) {
    this.state.start(statesKeys.boot, true, false, ...params);
  }
}

const game = new Game(config);
game.__run();