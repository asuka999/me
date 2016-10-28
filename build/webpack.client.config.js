const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const precss = require('precss')
const autoprefixer = require('autoprefixer') // ({browsers: ['last 3 versions']})
const config = require('./webpack.base.config')

module.exports = Object.assign({}, config, {
  entry: {
    client: './web-app/client-entry.js'
  },
  resolve: Object.assign({}, config.resolve, {
    aliasFields: ['browser']
  }),
  output: {
    path: './dist/public',
    filename: 'script/[name].js',
    publicPath: '../'
  },
  module: {
    loaders: [
      ...config.module.loaders,
      {
        test: /.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css!postcss',
          publicPath: '../'
        })
      }
    ]
  },
  plugins: [
    ...config.plugins,
    new ExtractTextPlugin('style/style.css'),
    new webpack.LoaderOptionsPlugin({
      test: /.vue$/,
      options: {
        vue: {
          loaders: {
            css: ExtractTextPlugin.extract({
              loader: 'css!postcss',
              fallbackLoader: 'vue-style-loader',
              publicPath: '../'
            })
          },
          postcss: [precss, autoprefixer]
        }
      }
    }),
    new webpack.LoaderOptionsPlugin({
      test: /.css$/,
      options: {
        postcss() {
          return [precss, autoprefixer]
        }
      }
    })
  ]
})
