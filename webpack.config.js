const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "development",
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
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(scss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.png$/,
        use: ["file-loader", "url-loader"]
      },
      {
        test: /\.svg$/,
        use: ["svg-url-loader"]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new Webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    open: true,
    compress: true,
    port: 3008,
    historyApiFallback: true,
    hot: true,
  },
};
