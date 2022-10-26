const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
  devtool: "source-map",
  target: "node",
  entry: {
    index: "./index.ts",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json",
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".mjs", ".js"],
  },
};
