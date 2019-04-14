const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const webpack = require('webpack');

const imageExtensions = ['png', 'jpg', 'gif'];
let webpackMode = process.env.WEBPACK_MODE;
let dev = webpackMode === 'development';

const config = {
  mode: webpackMode,
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      pixi: path.resolve(__dirname, 'node_modules/phaser-ce/build/custom/pixi.js'),
      p2: path.resolve(__dirname, 'node_modules/phaser-ce/build/custom/p2.js'),
      phaser: path.resolve(__dirname, 'node_modules/phaser-ce/build/custom/phaser-split.js')
    }
  },
  devtool: dev ? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [dev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
      },
      { test: /pixi\.js$/, use: 'expose-loader?PIXI' },
      { test: /p2\.js$/, use: 'expose-loader?p2' },
      { test: /phaser-split\.js$/, use: 'expose-loader?Phaser' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(dev),
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'PhaserCE App',
      template: path.resolve(__dirname, 'src', 'index.html'),
      favicon: path.resolve(__dirname, 'src', 'favicon.png'),
      minify: dev ? false : {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'assets'),
        to: path.resolve(__dirname, 'dist', 'assets'),
        ignore: ['*.tps', '*.tmx']
      }
    ])
  ]
}

if (dev) {
  config.devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
  config.plugins.push(new MiniCssExtractPlugin({
    filename: "[name].[hash].css"
  }));
  config.plugins.push(new ImageminPlugin({
    test: filename => {
      let ext = null;
      try {
        ext = filename.split('.').pop();
      } catch (ex) {
        return false;
      }
      if (!ext) {
        return false;
      }
      if (imageExtensions.indexOf(ext) !== -1) {
        return true;
      }
      return false;
    }
  }))
}

module.exports = config;
