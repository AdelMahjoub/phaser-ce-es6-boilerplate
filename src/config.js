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
  renderer: Phaser.WEBGL_MULTI,
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