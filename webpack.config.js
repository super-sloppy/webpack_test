const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 新增
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg)$/,
        // query: {
        //   useRelativePath: process.env.NODE_ENV === 'production'
        // },
        use: [
          {
            loader: 'url-loader?limit=8192',

          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }, {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new webpack.NamedModulesPlugin(), // 新增
    new webpack.HotModuleReplacementPlugin() // 新增
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src/img'),
    compress: true,
    port: 8033,
    // publicPath: './src/img/',
    host: '127.0.0.1',
    hot: true // 新增
  },
  // output: {
  //   path: 'dist',
  //   publicPath: '/assets/',
  //   filename: 'bundle.js'
  // }
};