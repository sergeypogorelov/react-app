const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const config = require('./app.config');

module.exports = {
    context: config.paths.src,
    entry: {
        index: './index'
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
                test: /\.css$/,
                include: [ config.paths.src ],
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                include: [ config.paths.src ],
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [ config.paths.src ],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(jpg|png|eot|woff2|woff|ttf|svg)$/,
                loader: 'file-loader',
                include: [ config.paths.assets ],
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('[name].css'),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'index.html',
            template: path.join(config.paths.src, 'index.html')
        })
    ],
    watch: false
};