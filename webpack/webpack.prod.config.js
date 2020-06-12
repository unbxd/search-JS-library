const Path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        app: Path.resolve(__dirname, '../demo/index.js'),
        es6SDK: Path.resolve(__dirname, '../src/index.js')
    },
    mode: 'production',
    output: {
        libraryTarget: 'umd',
        globalObject: '(typeof self !== "undefined" ? self : this)',
        libraryExport: 'default',
        path: Path.join(__dirname, '../public'),
        filename: 'js/[name].js',
        sourceMapFilename: '[file].map'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "common",
                    chunks: "all"
                }
            }
        },
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: 6,
              sourceMap: true,
              extractComments: true,
              mangle:true,
              keep_classnames:false
            }
          })
        ]
  },
  plugins: [
        new MiniCssExtractPlugin({
          path: Path.resolve(__dirname, '../public'),
          filename: '[name].css',
          chunkFilename: '[id].css'

        }),
        new HtmlWebpackPlugin({
            template:Path.resolve(__dirname, '../demo/index.html'),
            chunks: ['common', 'app','es6SDK'],
            path: Path.resolve(__dirname, '../public'),
            filename: "index.html"
        })
    ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          rules: [
            {
              test: /\.s?css$/,
              use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
              ]
            }
          ]

        }
        
    ]
  }
};