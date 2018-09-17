const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcDir = 'src';
const distDir = 'dist';
const jsDistDir = 'js';
const cssDistDir = 'css';
const fontsDistDir = 'fonts';
const imgDistDir = 'img';

module.exports = {
    entry: {
        app: `./${srcDir}/index.js`
    },
    module: {
        rules: [
            {
                test: /\.(otf|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: `${fontsDistDir}/`,
                            publicPath: `../${fontsDistDir}/`
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: `${imgDistDir}/`,
                            publicPath: `../${imgDistDir}/`
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader?sourceMap'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([distDir]),
        new HtmlWebpackPlugin({
            title: 'mdbootstrap-test',
            template: `./${srcDir}/index.html`
        }),
        new MiniCssExtractPlugin({
            filename: `${cssDistDir}/[name].[contenthash].css`,
            chunkFilename: `${cssDistDir}/[id].[contenthash].css`
        })
    ],
    output: {
        filename: `${jsDistDir}/[name].[contenthash].js`,
        path: path.resolve(__dirname, distDir)
    },
    performance: {
        maxEntrypointSize: 5000000,
        maxAssetSize: 500000
    },
    mode: 'production'
};
