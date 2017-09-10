const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./app.config');

module.exports = {
    context: config.paths.app,
    entry: {
        main: './main'
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    output: {
        path: config.paths.dist,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [ config.paths.src ],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'index.html',
            template: path.join(config.paths.src, 'index.html')
        })
    ],
    watch: false
};