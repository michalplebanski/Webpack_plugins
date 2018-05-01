const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {
    const enviorment = env || 'production';

    return {
        mode: enviorment,
        entry: './src/index.js',
            output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.' + enviorment + '.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader'},
                        {
                          loader: 'css-loader',
                          options: {
                              modules: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin ({
                template: 'src/index.html',
                filename: 'index.html',
                inject: 'body'
            }),
            new UglifyJsPlugin(),
            new OptimizeJsPlugin ({
                sourceMap: false
            })
        ],
    }
};