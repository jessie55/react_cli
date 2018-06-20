/*
 * webpack dist configuration
 *
 */
const webpack = require('webpack');
const config = require('./webpack.base.config');

config.mode = 'production';
config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
]);

module.exports = config;
