/*
 * webpack dist configuration
 *
 */
const webpack = require('webpack');
const config = require('./webpack.base.config');

const CleanWebpackPlugin = require('clean-webpack-plugin');

config.mode = 'production';
config.plugins = (config.plugins || []).concat([
  new CleanWebpackPlugin(['dist'], {
    root: 'd:/webpack/demo1/',
    verbose: true,
    dry: false
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
]);

module.exports = config;
