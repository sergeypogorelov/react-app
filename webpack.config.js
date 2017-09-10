const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src', 'app'),
    entry: {
        main: './main'
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
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