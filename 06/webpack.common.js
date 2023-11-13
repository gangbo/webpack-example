const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'webpack-numbers.js',
        library: {
            name: 'webpackNumbers',
            type: 'umd',
        },
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
    }
};
