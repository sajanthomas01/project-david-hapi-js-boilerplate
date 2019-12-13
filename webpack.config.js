const path = require("path");
const nodeExternals = require("webpack-node-externals");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "server", "devasset", "js", "index.js"),
  output: {
    path: path.resolve(__dirname, "server/public/build/"),
    filename: "main.js"
    //filename: "[name].[chunkhash].js"
  },
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
      //   {
      //     test: /\.scss$/,
      //     use: ExtractTextPlugin.extract({
      //       fallback: "style-loader",
      //       use: ["css-loader"]
      //     })
      //   }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ["**/*"]
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
      //filename: "style.[contenthash].css"
    }),
    new WebpackMd5Hash()
    //no need as of now
    // new HtmlWebpackPlugin({
    //   inject: false,
    //   hash: true,
    //   template: "./src/index.html",
    //   filename: "index.html"
    // })
  ]
};
