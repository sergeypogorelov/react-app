const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src', 'app'),
    entry: {
        main: './main'
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [ path.resolve(__dirname, 'src') ],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.html'),
            hash: true
        })
    ],
    watch: false
};