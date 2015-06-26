var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry:
  [
    './frontend/main.jsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders:
        ['react-hot', 'jsx-loader']},
      { test: /\.css$/, loader: 'css-loader'},
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ["node_modules"],
    extensions: ['', '.js', '.jsx', '.json'],
  },
  node: {
    console: true,
    tls: 'empty',
    net: 'empty',
    fs: 'empty'
  }
  // ,
  // devServer: {
  //  headers: { "Access-Control-Allow-Credentials": "true","Access-Control-Allow-Headers": "*"}
  // }
};
