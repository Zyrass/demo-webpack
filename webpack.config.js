// dépendances
const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.js",
  output: {
    filename: "index_bundle.js",
    path:
      process.env.NODE_ENV === "production"
        ? join(__dirname, "build")
        : join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(m|c)?js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack découverte",
    }),
  ],
};
