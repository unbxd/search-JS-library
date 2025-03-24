const Path = require("path");
// const packageJson = require("../package.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
	entry: {
		vanillaSearch: Path.resolve(__dirname, "../src/index.js"),
		iePolyfill: Path.resolve(__dirname, "../polyfill/iePolyfill.js"),
	},
	mode: "production",
	target: "web",
	output: {
		library: "UnbxdSearch",
		libraryTarget: "umd",
		libraryExport: "default",
		path: Path.join(__dirname, "../public/dist/js"),
		filename: "[name].js",
		sourceMapFilename: "[name].map",
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
		usedExports: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "../css/[name].css",
			chunkFilename: "../css/[name].css",
		}),
		new CompressionPlugin({
			algorithm: "gzip",
			filename(pathData){
        const parsed = Path.parse(pathData.filename);
        const { dir, name, ext } = parsed;
				return ext === ".css" ? `${dir}/${name}.min.css` : `${name}.min.js`;
			},
		}),
		// new S3Plugin({
		//   include: ["/public/dist/js/vanillaSearch.min.js", "/public/dist/css/vanillaSearch.min.css"],
		//   s3Options: {
		//       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		//       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		//   },
		//   s3UploadOptions: {
		//       Bucket: "unbxd",
		//       ContentEncoding() {
		//           return "gzip"
		//       },
		//       ContentType(fileName) {
		//           if (/\.css/.test(fileName)) {
		//               return "text/css";
		//           }
		//           if (/\.js/.test(fileName)) {
		//               return "text/javascript";
		//           }
		//       }
		//   },
		//   basePath: `/search-sdk/v${packageJson.version}/`
		// })
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
};
