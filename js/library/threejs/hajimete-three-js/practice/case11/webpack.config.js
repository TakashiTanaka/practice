const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: {
		main: `${__dirname}/src/main.js`,
	},
	output: {
		path: `${__dirname}`,
		filename: '[name].js',
		publicPath: `${__dirname}`,
	},
	devServer: {
		static: '../',
		open: true,
	},
	stats: {
		children: true,
	},
	optimization: {
		minimizer: [new TerserPlugin({
			extractComments: false,
		})],
	},
	cache: true,
	devtool: "source-map",
	watchOptions: {
		ignored: /node_modules/
	},
};