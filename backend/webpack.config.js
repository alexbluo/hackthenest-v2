const path = require("path");

module.exports = {
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
    extensions: [".ts", ".js", "json"],
  },
};
