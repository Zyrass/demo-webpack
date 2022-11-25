// dépendances
const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressPlugin = require("progress-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.js",
  output: {
    filename: "index_bundle.js",
    path:
      process.env.NODE_ENV === "production"
        ? join(__dirname, "build")
        : join(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)?ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
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
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        loader: "file-loader",
        options: {
          outputPath: "assets/images",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack découverte",
    }),
    new ProgressPlugin(true),
  ],
};
