const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'Afterglow',
      type: 'umd'
    }
  },

  devtool: 'source-map',

  plugins: process.env.NODE_ENV === 'development' ? [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]: [],

  optimization: {
    minimize: true
  }
}