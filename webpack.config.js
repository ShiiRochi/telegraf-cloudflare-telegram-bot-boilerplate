require('dotenv').config({
	path: "./.dev.vars"
});
const path = require('path');
const { DefinePlugin } = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.ts'),
    target: 'webworker',
    output: {
        filename: 'worker.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    mode: 'production',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            fs: false,
        },
    },
    plugins: [
        new NodePolyfillPlugin(),
        new DefinePlugin({
            BOT_TOKEN: JSON.stringify(process.env.BOT_TOKEN || ''),
            SECRET_PATH: JSON.stringify(process.env.SECRET_PATH || ''),
        }),
    ],
    optimization: {
        minimize: false,
    },
    performance: {
        hints: false,
    },
};
