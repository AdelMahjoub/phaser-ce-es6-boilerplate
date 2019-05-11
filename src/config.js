export const display = {
  width: 1280,
  height: 720,
  minWidth: 640,
  minHeight: 360,
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
  Boot: 'Boot',
  Preload: 'Preload',
  Start: 'Start',
  Main: 'Main'
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

export const assetsKeys = {
  atlases: {
    main: 'atlas'
  },
  fonts: {
    neuropol: 'neuropol'
  },
  tiledBgs: {
    starsPurple: 'purple.png',
    starsBlue: 'blue.png'
  },
  buttons: {
    blue: {
      overFrame: 'blue_button01.png',
      outFrame: 'blue_button03.png',
      downFrame: 'blue_button01.png',
      upFrame: 'blue_button03.png',
    }
  },
  sprites: {
    spaceShip: 'playerShip.png'
  },
  bullets: {
    laser: 'laser.png'
  }
}