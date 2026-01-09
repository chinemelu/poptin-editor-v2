const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path')

module.exports = {
    mode: 'production',
    extends: path.resolve(__dirname, './webpack.common.js'),
    plugins: [
        new MiniCssExtractPlugin(),
        new CssMinimizerPlugin(),
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            config: path.resolve(__dirname, 'postcss.config.js'),
                        },
                    },
                  },
                ],
                sideEffects: true // makes tailwindcss to be compiled in the production build
            },
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            config: path.resolve(__dirname, 'postcss.config.js'),
                        },
                    },
                  },
                  'sass-loader',
                ]
            }
        ]
    }
  }
