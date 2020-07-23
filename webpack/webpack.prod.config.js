const Path = require('path');
const packageJson = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin');

module.exports = {
    entry: {
        vanillaSearch: Path.resolve(__dirname, '../src/index.js')
    },
    mode: 'production',
    output: {
        libraryTarget: 'umd',
        globalObject: '(typeof self !== "undefined" ? self : this)',
        libraryExport: 'default',
        path: Path.join(__dirname, '../public/dist/js'),
        filename: 'vanillaSearch.js',
        sourceMapFilename: 'vanillaSearch.map'
    },
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin()
        ]
  },
  plugins: [
    // new S3Plugin({
    //     // Only upload css and js
    //     include: ["public/dist/vanillaSearch.js"],
    //     s3Options: {
    //         accessKeyId: process.env.ASSETS_AWS_KEY_ID, // Your AWS access key
    //         secretAccessKey: process.env.ASSETS_AWS_SECRET_KEY, // Your AWS secret key
    //     },
    //     s3UploadOptions: {
    //         Bucket: "unbxd", // Your bucket name
    //         // Here we set the Content-Encoding header for all the gzipped files to "gzip"
    //         ContentEncoding() {
    //             return "gzip"
    //         },
    //         // Here we set the Content-Type header for the gzipped files to their 
    //         // appropriate values, so the browser can interpret them properly
    //         ContentType(fileName) {
    //             if (/\.css/.test(fileName)) {
    //                 return "text/css";
    //             }
    //             if (/\.js/.test(fileName)) {
    //                 return "text/javascript";
    //             }
    //         }
    //     },
    //     basePath: `/search-sdk/v${packageJson.version}/`, // This is the name the uploaded directory will be given
    //     directory: 'public/dist' // This is the directory you want to upload
    // })
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      chunkFilename: '../css/vanillaSearch.css'
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

        },
        {
          test: /\.template\.js$/,
          loader: 'minify-template-literal-loader',
          options: {
            caseSensitive: true,
            collapseWhitespace: true
          }
        }
        
    ]
  }
};
