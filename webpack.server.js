const path = require("path");
const { webpack } = require("webpack");
const merge = require("webpack-merge");
const webpackNodeExternals = require("webpack-node-externals");
const commonWebpackConfig = require("./webpack.common");

const serverWebpackConfig = {
  target: "node",
  entry: "./src/server/server.js",
  output: {
    filename: "server-build.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};

const mergeServerWebpackConfig = merge(
  commonWebpackConfig,
  serverWebpackConfig
);

module.exports = mergeServerWebpackConfig;
