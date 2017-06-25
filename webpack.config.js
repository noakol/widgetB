const PATH = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


const pkg = require('./package.json');

module.exports = {
  entry: {
      widgetB: ['./']
  },
  externals: Object.keys(pkg.dependencies),
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'widgetB',
    libraryTarget: 'umd'
  },

  context: PATH.resolve(__dirname, 'src'),

  module: {
    rules: [{
      test: /.js|.jsx?$/,
      include: PATH.resolve(__dirname, 'src'),
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
    new HtmlPlugin(),
    new BundleAnalyzerPlugin()
  ]
};
