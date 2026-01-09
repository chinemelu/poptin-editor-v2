const path = require("path");
const common = require("./webpack.common");

module.exports = {
  extends: path.resolve(__dirname, "./webpack.common.js"),
  mode: "development",
  devServer: {
    historyApiFallback: true,
    // static: {
    //     directory: path.resolve(__dirname, "./dist"),
    // },
    devMiddleware: {
      writeToDisk: true, // this adds the bundle.js file to the dist folder
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },
        ],
        sideEffects: true // makes the tailwindcss styles work
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
