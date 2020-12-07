const path = require('path');
const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common');

const clientWebpackConfig = {
  entry: "./src/client/client-component/client.js",
  output: {
    filename: "client-build.js",
    path: path.resolve(__dirname, "build"),
  },
  
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
      }
    ]
  },
};

const mergeClientConfig = merge(clientWebpackConfig,commonWebpackConfig);

module.exports = mergeClientConfig;