const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		app: path.resolve(__dirname, "../demo/js/index.js"),
		unbxdSearch: path.resolve(__dirname, "../src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "../public"),
		filename: "[name].[contenthash].js",
		clean: true,
		sourceMapFilename: "[file].map",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"], // Add loaders for CSS
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../demo/index.html"),
			chunks: ["common", "app"],
			path: path.resolve(__dirname, "../public"),
			filename: "index.html",
		}),
		new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
	},
	devServer: {
		static: path.join(__dirname, "dist"),
		compress: true,
		hot: true,
		open: true,
		port: 9000,
		historyApiFallback: true,
	},
	resolve: {
		extensions: [".js", ".scss"],
	},
};
