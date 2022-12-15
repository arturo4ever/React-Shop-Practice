const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  mode: "development",
  devtool: 'source-map',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@logos': path.resolve(__dirname, 'src/assets/logos'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@routes': path.resolve(__dirname, 'src/routes'),
    },
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [MiniCssExtractPlugin.loader,
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
      inject: true,
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
    	new CopyWebpackPlugin({
      	patterns: [
        	{
          		from: path.resolve(__dirname, "src", "assets/icons"),
          		to: "assets/icons"
        	},
        	{
          		from: path.resolve(__dirname, "src", "assets/logos"),
          		to: "assets/logos"
        	}
		]
		}),
		new BundleAnalyzerPlugin(),
    ],
	devServer: {
		static: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 3006,
        open: true,
	}
};
