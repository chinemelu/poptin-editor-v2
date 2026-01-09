const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/main.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "./dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        }),
        new VueLoaderPlugin(),
        new Webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
        }), // to remove warn in browser console: runtime-core.esm-bundler.js:3607 Feature flags __VUE_OPTIONS_API__, __VUE_PROD_DEVTOOLS__ are not explicitly defined...
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                sideEffects: true, // makes the scope styles in vue components work
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader?configFile=tsconfig.webpack.json",
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    },
                },
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
  }