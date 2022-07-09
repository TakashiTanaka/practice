const path = require('path');
const toBool = require('to-bool');
const isProduction = toBool(process.env.PRODUCTION);

module.exports = {
  mode: isProduction ? 'production' : 'development',
  performance: {
    maxEntrypointSize: 1200000,
    maxAssetSize: 1200000,
  },
  entry: './src/main.js',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    // compress: true,
    port: 8000,
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/i,
  //       loader: 'babel-loader',
  //     },
  //   ],
  // },
};
