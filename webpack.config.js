const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    //__dirname = gives the directory of the current file and add public to it.
    path: path.join(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  mode: "development",
};

//1.by default webpack build the bundle in production mode
//2.to not build everytime you make a chane in file, we can use watch flag in build script

//css-loader = parses the css code
//style-loader = inject the final css into the style tag inside html

//skips import React from 'react' for v17 or more in file
// new webpack.ProvidePlugin({
//   React: "react",
// })
