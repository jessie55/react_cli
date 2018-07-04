/*
 * webpack dist configuration
 *
 */
const webpack = require('webpack');
const pathConfig = require('./path');
const config = require('./webpack.base.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

config.mode = 'production';
config.plugins = ([
  new CleanWebpackPlugin(['dist'], {
    root: pathConfig.ROOT,
    verbose: true,
    dry: false
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
]).concat(config.plugins || []);

config.devServer = {
  contentBase: pathConfig.DIST_PATH,
  port: '4000'
};

module.exports = config;
