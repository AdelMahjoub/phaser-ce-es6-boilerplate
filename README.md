# PhaserCE Boilerplate

# Clone the repo
## using ssh url
`$ git clone git@github.com:AdelMahjoub/phaser-ce-es6-boilerplate.git`
## using https url
`$ git clone https://github.com/AdelMahjoub/phaser-ce-es6-boilerplate.git`

# Install dependencies
`$ npm i`

# Run the development server
`$ npm start`

# Build a distribution
`$ npm run build`

A link to a phaser cdn is set in the html file, with a fallback to a local link if the loading from the cdn fails.
You get faster loadings and build time by loading phaser from the cdn or locally.

phaser-ce npm module is although present in package.json as a dev dependency, mainly for the types definitions or if you intend to bundle it in some other ways.