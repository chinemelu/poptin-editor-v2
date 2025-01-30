const path = require('path')
const Webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            writeToDisk: true, // this adds the bundle.js file to the dist folder
        },
    },
    module: {
        rules: [
            // ... other rules
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
                    // this will apply to both plain `.js` files
                // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
                // this will apply to both plain `.css` files
                // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new Webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true, 
            __VUE_PROD_DEVTOOLS__: false,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
        }), // to remove warn in browser console: runtime-core.esm-bundler.js:3607 Feature flags __VUE_OPTIONS_API__, __VUE_PROD_DEVTOOLS__ are not explicitly defined...
    ]
}