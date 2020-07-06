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
        unbxdSearch: Path.resolve(__dirname, '../src/index.js')
    },
    mode: 'production',
    output: {
        libraryTarget: 'umd',
        globalObject: '(typeof self !== "undefined" ? self : this)',
        libraryExport: 'default',
        path: Path.join(__dirname, '../public/dist'),
        filename: 'js/unbxdSearch.js',
        sourceMapFilename: 'unbxdSearch.map'
    },
    optimization: {
      
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: 6,
              sourceMap: true,
              extractComments: true,
              mangle:true,
              keep_classnames:false,
              compress: {
                ecma       : 5,
                warnings   : false,
                comparisons: false,
                inline     : 2
              },
            }
          })
        ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/unbxdSearch.css'
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