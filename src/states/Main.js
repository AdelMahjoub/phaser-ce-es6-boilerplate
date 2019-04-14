import { statesKeys } from '../config';

export default class main extends Phaser.State {
  constructor() {
    super();
  }

  create() {
    console.log('In main state');
  }
}