require('dotenv').config();
const TsConfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const DotEnvWebpack = require('dotenv-webpack');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, 'build'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  resolve: {
    extensions: ['.tsx', '.js', '.ts'],
    plugins: [new TsConfigPathsWebpackPlugin.TsconfigPathsPlugin()],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'demeter',
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new DotEnvWebpack(),
  ],
};
