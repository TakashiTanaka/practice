const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: {
		main: './src/main.js',
	},
	output: {
		path: `${__dirname}/dist/js`,
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
				test: /\.css/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: "css-loader",
						options: {
							url: false,
							sourceMap: true,
							importLoaders: 2,
						},
					},
				]
			}
		]
	},
	devtool: "source-map",
	watchOptions: {
		ignored: /node_modules/
	},
};