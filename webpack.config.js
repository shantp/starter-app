var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
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
    extensions: ['', '.jsx', '.js', '.json'],
    moduleDirectories: ['src', 'node_modules']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel?optional[]=runtime'],
      exclude: /node_modules/
    }]
  }
};
