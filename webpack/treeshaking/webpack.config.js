const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const glob = require('glob-all');
const PurifyCSSPlugin = require('purifycss-webpack');
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            // chunkFilename: '[id].css',
            // ignoreOrder: false, 
        }),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync([
                path.join(__dirname, './*.html'),
                path.join(__dirname, './src/index.js')
            ]),
        }),
        new WebpackDeepScopeAnalysisPlugin(),
    ],
}