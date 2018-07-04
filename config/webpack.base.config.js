/*
 * webpack common configuration
 *
 */

const webpack = require('webpack');
const path = require('path');
const pathConfig = require('./path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globalEnv = require('./global.env');

const baseConfig = {
  entry: {
    main: [
      'react-hot-loader/patch',
      'babel-polyfill',
      `${pathConfig.SRC_PATH}/index`
    ],
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router']
  },

  output: {
    path: pathConfig.DIST_PATH,
    filename: 'js/[name].js',
    publicPath: '/'
  },

  module: {
    rules: [{
      test: /\.html$/,
      use: ['html-loader']
    },
    {
      test: /\.js$|\.jsx$/,
      use: ['babel-loader', 'eslint-loader']
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
    },
    {
      test: /\.(gif|jpg|png)\??.*$/,
      loader: 'url-loader',
      options: {
        name: './img/[name].[ext]?[hash]',
        limit: 3072
      }
    },
    {
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader',
      options: {
        name: './fonts/[name].[ext]',
        limit: 3072
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      ROOT: pathConfig.ROOT,
      node_modules: pathConfig.NODE_MODULES_PATH,
      SERVICE: pathConfig.SRC_PATH.join('service'),
      antd: 'antd',
      actions: path.join(__dirname, '..', 'src/redux/actions'),
      constants: path.join(__dirname, '..', 'src/redux/constants'),
      assets: path.join(__dirname, '..', 'src/assets'),
      containers: path.join(__dirname, '..', 'src/containers'),
      cards: path.join(__dirname, '..', 'src/cards'),
      components: path.join(__dirname, '..', 'src/components'),
      helpers: path.join(__dirname, '..', 'src/helpers'),
      routers: path.join(__dirname, '..', 'src/routers')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.SplitChunksPlugin({
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        //打包重复出现的代码
        vendor: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          name: 'vendor'
        },
        //打包第三方类库
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: Infinity
        }
      }
    }),
    new webpack.optimize.RuntimeChunkPlugin({
      name: 'manifest'
    }),
    new HtmlWebpackPlugin({
      title: 'DEMO',
      template: `${pathConfig.SRC_PATH}/index.html`,
      filename: `${pathConfig.DIST_PATH}/index.html`,
      chunks: ['main', 'vendor', 'commons', 'manifest']
      // favicon: 'favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
      chunkFilename: 'css/[name].css'
    }),
    new webpack.DefinePlugin({
      'process.env': Object.assign({
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }, globalEnv)
    })
  ]
};

module.exports = baseConfig;
