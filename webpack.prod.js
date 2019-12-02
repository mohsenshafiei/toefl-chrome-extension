const merge = require('webpack-merge');
const path = require("path");
const webpack = require("webpack");
const common = require('./webpack.config.js');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CopyPlugin([
      { from: 'public/' },
    ]),
  ],
});
