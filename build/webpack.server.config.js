const config = require('./webpack.base.config')
const webpack = require('webpack')
const assets = ['normalize.css', 'github-markdown-css']

const externals = Object.keys(require('../package.json').dependencies)
  .filter(item => assets.indexOf(item) < 0)

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
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.VUE_ENV': '"server"',
      'process.env.ORIGIN': `"http://127.0.0.1:${process.env.PORT || 3000}"`
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
})
