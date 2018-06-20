/*
 * webpack dev config
 *
 */
const pathConfig = require('./path');
const service = require('./service');
const config = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

config.mode = 'development';
config.devServer = {
  hot: true,
  contentBase: pathConfig.SRC_PATH,
  publicPath: '/',
  port: '3000',
  inline: true,
  stats: {
    colors: true,
    progress: true,
    noInfo: true
  },
  proxy: service.proxy
};

config.module.rules[3] = {
  test: /\.scss$/,
  use: ['css-hot-loader'].concat([MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'])
};

config.module.rules[4] = {
  test: /\.(gif|jpg|png)\??.*$/,
  loader: 'url-loader',
  options: {
    name: '../assets/pic/[name].[ext]?[hash]',
    limit: 3072
  }
};

config.module.rules[5] = {
  test: /\.(woff|svg|eot|ttf)\??.*$/,
  loader: 'url-loader',
  options: {
    name: './fonts/[name].[ext]',
    limit: 3072
  }
};

module.exports = config;
