var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpckPlugin = require('html-webpack-plugin');
var ClearWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][hash:5].bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader,
            //         },
            //         {
            //             loader: 'css-loader'
            //         }
            //     ]
            // }
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('postcss-preset-env'),
                                require('autoprefixer'),
                                require('cssnano')
                            ]
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name][hash:5].css',
        }),
        new HtmlWebpckPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                // 清理注释
                removeComments: true,
                // 清理空格
                collapseWhitespace: true
            }
        }),
        new ClearWebpackPlugin()
    ],
    mode: "development"
}