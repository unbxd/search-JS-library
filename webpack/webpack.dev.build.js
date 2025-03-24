const Path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
	entry: {
		vanillaSearch: Path.resolve(__dirname, "../src/index.js"),
		iePolyfill: Path.resolve(__dirname, "../polyfill/iePolyfill.js"),
	},
	mode: "development",
	target: "web",
	output: {
		library: "UnbxdSearch",
		libraryTarget: "umd",
		libraryExport: "default",
		path: Path.join(__dirname, "../public/dist/js"),
		filename: "[name].source.js",
		sourceMapFilename: "[name].source.map",
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].source.css",
			chunkFilename: "[id].source.css",
		}),
		new CompressionPlugin(), // Ensure compression works properly
	],
	resolve: {
		alias: {
			"~": Path.resolve(__dirname, "../src"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						plugins: ["@babel/plugin-syntax-dynamic-import", "@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-export-default-from"],
					},
				},
			},
			{
				test: /\.html$/,
				loader: "html-loader",
			},
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									require("autoprefixer")({
										overrideBrowserslist: ["> 1%", "last 2 versions"],
									}),
								],
							},
						},
					},
				],
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
};
