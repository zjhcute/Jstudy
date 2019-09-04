const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
    const Webpack = require('webpack');
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
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name][hash:5].[ext]',
                            // 限制图片大小
                            limit: 1000,
                            // 如果文件大小小于limit规定的大小, 就会单独在outputPath路径下打包
                            outputPath: 'img'
                        }
                    },
                    {
                        loader: 'img-loader',
                        options: {
                            plugins: [
                                require('imagemin-pngquant')({
                                    quality: [0.3, 0.5]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new Webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development',
    devServer: {
        port: '8080',
        contentBase: 'dist',
        hot: true
    }
    // 如果有两套不同的webpack.config.js文件, 分别对应开发环境和生成环境
    // 我们进行打包的时候
    // 需要使用webpck --config webpack-dev.config.js 或者 webpack --config webpack-prod.config.js
}