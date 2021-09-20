const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		main: './src/main.js',
	},
	output: {
		path: `${__dirname}/dist`,
		filename: '[name].js',
	},
	optimization: {
		minimizer: [new TerserPlugin({
			extractComments: false,
		})],
	},
	cache: true,
	module: {
		rules: [
			{
				test: /\.(scss|css)/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
						options: {
							url: false,
							sourceMap: true,
							importLoaders: 2,
						},
					},
					{
						loader: "sass-loader",
						options: {
							implementation: require('sass'),
							sassOptions: {
								fiber: false,
							},
							sourceMap: true,
						},
					},
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "./css/style.css",
		}),
	],
	devtool: "source-map",
	watchOptions: {
		ignored: /node_modules/
	},
};