const path = require("path");

module.exports = {
  entry: {
    index: "index.ts",
  },
  output: {
    path: __dirname,
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
            configFile: "tsconfig.scripts.json",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", "json"],
  },
};
