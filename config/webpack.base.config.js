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
const theme = require('../theme');

const baseConfig = {
  entry: {
    main: [
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
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname, './postcss.config.js')
            }
          }
        }
      ]
    },
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname, './postcss.config.js')
            }
          }
        },
        'sass-loader'
      ]
    },
    {
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true
          }
        },
        {
          loader: 'less-loader',
          options: {
            modifyVars: theme
          }
        }
      ]
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
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'WITH_MOCK': JSON.stringify(process.env.WITH_MOCK)
      }, globalEnv)
    })
  ]
};

module.exports = baseConfig;
