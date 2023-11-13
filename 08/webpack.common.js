const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/js/main.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        hot: true
      },
    plugins: [
        new miniCssExtractPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                mimetype: 'image/svg+xml',
                scheme: 'data',
                type: 'asset/resource',
                generator: {
                    filename: 'icons/[hash].svg'
                }
            },
            {
                test: /\.(scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: miniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',

                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
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
