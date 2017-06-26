const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const pkg = require('./package.json');

(Object.keys(pkg.dependencies)).map((key) => console.log(key))


module.exports = {
  entry: {
      widgetB: ['./']
  },
  externals: Object.keys(pkg.dependencies),
  output: {
    path: resolve(__dirname, 'lib'),
    filename: '[name].js',
    library: 'widgetB',
    libraryTarget: 'umd'
  },

  context: resolve(__dirname, 'src'),

  module: {
    rules: [{
      test: /jsx?$/,
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
    new HtmlPlugin(),
    new BundleAnalyzerPlugin()
  ]
};
