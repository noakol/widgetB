const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const pkg = require('./package.json');

module.exports = {
  entry: {
      widgetB: ['./']
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'widgetB',
    libraryTarget: 'umd'
  },

  context: resolve(__dirname, 'src'),

  module: {
    rules: [{
      test: /.js|.jsx?$/,
      include: resolve(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        presets: [['env', { modules: false }], 'react']
      }
    }]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },

  plugins: [
    new HtmlPlugin()
  ]
};
