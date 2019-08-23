var path = require('path');
module.exports = {
    entry: {
        // 多入口
        index: './src/index.js',
        app: './src/app.js'
    },
    output: {
        // 路径 __dirname表示当前的文件夹下
        path: path.resolve(__dirname, 'dist'),
        // 多出口
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}
        ]
    },
    mode: 'development'
}