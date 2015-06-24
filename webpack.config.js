var webpack = require('webpack');
var path = require('path');

module.exports = {
  // devtool: 'eval',
  entry:
  [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './frontend/main.jsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /[\.jsx | \.js]$/, loaders:
        ['react-hot', 'jsx'],
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'css-loader' },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  }
};
