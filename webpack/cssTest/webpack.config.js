// 引入node全局变量 path
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpckPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][hash:5].bundle.js',
        chunkFilename: '[name][hash:5].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks: 'all',
                    minSize: 1,
                    minChunks: 2,
                    priority: 1
                },
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'all'
                }
            }
        }
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
        new CleanWebpackPlugin()
    ],
    mode: "development"
}