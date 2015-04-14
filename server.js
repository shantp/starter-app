var express = require('express');
var app = express();

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.local.config');

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true
}).listen(9090, 'localhost', function (err, result) {
  if (err) console.log(err);
});

var server = app.listen(8080, function () {
  var port = server.address().port;
  console.log('listening @ %s', port);
});