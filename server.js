const express = require('express');
const app = express();

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.local.config');

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true,
}).listen(9090, 'localhost', (err, result) => {
  if (err) {
    console.log(err, result);
  }
});

const server = app.listen(8080, () => {
  const port = server.address().port;
  console.log('listening @ %s', port);
});
