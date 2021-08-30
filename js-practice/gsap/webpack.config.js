const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	devServer: {
		static: [`${__dirname}`, 'src'],
		open: true,
	},
	// mode: "production",
	mode: "development",
	entry: {
		main: './src/main.js',
	},
	output: {
		path: `${__dirname}/dist`,
		publicPath: `/${__dirname}/`,
		filename: '[name].js',
	},
	optimization: {
		minimizer: [new TerserPlugin({
			extractComments: false,
		})],
	},
	cache: true
};