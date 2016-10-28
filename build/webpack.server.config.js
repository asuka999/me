const config = require('./webpack.base.config')
const webpack = require('webpack')
const assets = ['normalize.css', 'github-markdown-css']

const externals = Object.keys(require('../package.json').dependencies)
  .filter(item => assets.indexOf(item) < 0)

const {
  NODE_ENV = 'development',
  ORIGIN = 'http://127.0.0.1:3000'
} = process.env
module.exports = Object.assign({}, config, {
  entry: {
    server: './web-app/server-entry.js'
  },
  output: {
    path: './dist/view',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals,
  target: 'node',
  module: {
    loaders: [
      ...config.module.loaders,
      {
        test: /.css$/,
        loader: 'ignore'
      }
    ]
  },
  plugins: [
    ...config.plugins,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${NODE_ENV}"`,
      'process.env.VUE_ENV': '"server"',
      'process.env.ORIGIN': `"${ORIGIN}"`
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
})
