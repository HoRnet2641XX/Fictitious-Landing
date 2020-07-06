const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
	/// メインとなるJavaScriptファイル（エントリーポイント）/
	entry: "./src/js/app.js",
	mode: "development",
	devServer: {
		contentBase: "dist",
		open: true,
		port: 9001
	},
	/// ファイルの出力設定/
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js"
	},
	module: {
		rules: [
			// sass,css取り込み設定
			{
				test: /\.s[ac]ss$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require("autoprefixer")({
									browsers: ["last 2 versions", "ie >= 11", "Android >= 4", ]
								})
							]
						}
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src/js')],
				loader: 'babel-loader'
			},
			// // ↓ 追加
			{
				test: /.js$/,
				include: [path.resolve(__dirname, 'src/js')],
				loader: 'eslint-loader'
			},
			{
				test: /\.(jpg|png)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
					}
				}]
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/bundle_[name].css'
		})
	]
};