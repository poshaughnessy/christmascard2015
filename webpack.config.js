'use strict';

const DEV = process.env.NODE_ENV !== 'production';

let entry = {
  app: ['./src/js/main.js']
};

if (DEV) {
  entry.app.push('webpack-dev-server/client?http://localhost:9000');
  entry.app.push('webpack/hot/dev-server');
}

const config = {
  entry: entry,
  debug: DEV,
  devtool: DEV ? 'inline-source-map' : false,
  output: {
    path: __dirname + '/build',
    publicPath: 'public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/public',
    hot: true,
    noInfo: false,
    inline: true,
    stats: { colors: true }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=es2015'
      }
    ]
  },
  plugins: []
};

module.exports = config;
