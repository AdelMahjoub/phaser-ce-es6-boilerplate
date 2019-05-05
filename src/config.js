export const display = {
  width: 640,
  height: 360,
  minWidth: 256,
  minHeight: 144,
  maxWidth: 3840,
  maxHeight: 2160
}

/**@type {Phaser.IGameConfig} */
export const config = {
  width: display.width,
  height: display.height,
  renderer: Phaser.AUTO,
  scaleMode: Phaser.ScaleManager.SHOW_ALL,
  alignH: true,
  alignV: true,
  antialias: true,
  roundPixels: true
}

export const statesKeys = {
  boot: 'boot',
  splash: 'splash',
  preload: 'preload',
  start: 'start',
  main: 'main'
}

export const colorPalette = {
  black: 0x000000,
  darkBlue: 0x1d2b53,
  darkPurple: 0x7e2553,
  darkGreen: 0x008751,
  brown: 0xab5236,
  darkGray: 0x5f574f,
  lightGray: 0xc2c3c7,
  white: 0xfff1e8,
  red: 0xff004d,
  orange: 0xffa300,
  yellow: 0xffec27,
  green: 0x00e436,
  blue: 0x29adff,
  indigo: 0x83769c,
  pink: 0xff77a8,
  peach: 0xffccaa,
}