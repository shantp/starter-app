var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist/'),
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules!sass',
      }
    ]
  }
};
