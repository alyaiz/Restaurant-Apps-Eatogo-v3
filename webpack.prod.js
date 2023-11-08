const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      swDest: './sw.bundle.js',
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new MiniCssExtractPlugin({
      filename: 'notification.css',
    }),
  ],
});
