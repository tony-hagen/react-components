const path = require('path');
const { merge } = require('webpack-merge');
const resolve = require('./build/resolve');
const typescript = require('./build/typescript');

module.exports = merge(
    resolve,
    typescript('./src'),
    {
        entry: './src/index.ts',
    },
    {
        optimization: {
            minimize: false,
        },
    },
    {
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'dist'),
            library: 'default',
            libraryTarget: 'umd',
            globalObject: 'this',
        },
    },
    {
        externals: {
            react: {
                commonjs: 'react',
                commonjs2: 'react',
                amd: 'react',
            },
            'react-dom': {
                commonjs: 'react-dom',
                commonjs2: 'react-dom',
                amd: 'react-dom',
            },
        },
        mode: 'production',
    },
    {
        resolve: {
            alias: {
                'timesaver-common-components': path.resolve(__dirname, 'src', 'index.ts'),
            },
        },
    }
);
