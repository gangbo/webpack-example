const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'webpack-numbers.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'WebpackNumbers',
            type: 'umd',
        },
        clean: true,
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/index.html', to: '' },
                // 可以添加更多的文件复制配置
            ],
        }),
    ],
};
