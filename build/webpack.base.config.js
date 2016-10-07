const devtool = process.env.NODE_ENV !== 'production' ? 'source-map' : undefined


module.exports = {
  devtool: devtool,
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.(png|jpg|gif|svg|woff|eot|ttf)$/,
      loader: 'url',
      query: {
        limit: 8148,
        name: 'assets/[name].[ext]?[hash]'
      }
    }]
  },
  plugins: [
  ]
}
