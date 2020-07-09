const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  /// メインとなるJavaScriptファイル（エントリーポイント）/
  entry: './src/js/app.js',
  mode: 'development',
  devServer: {
    contentBase: 'dist',
    open: true,
    port: 9101,
  },
  /// ファイルの出力設定/
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // sass,css取り込み設定
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader?url=false',
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src/js')],
        loader: 'babel-loader',
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src/js')],
        loader: 'eslint-loader',
      },
      {
        test: /\.ejs$/,
        use: ['html-loader', 'ejs-html-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.ejs',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/bundle.[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src',
          to: '',
        },
      ],
    }),
  ],
};
