const path = require('path');
const PrettierPlugin = require("prettier-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
    entry: ['./src/js/index.js', './src/scss/style.scss'],
    output: {
      filename: 'js/app.js',
      path: path.resolve(__dirname, './dist')
      //publicPath: '/dist'
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      overlay: true
    },
    module: {
        rules: [{
          test: /\.html$/,
          use: [{
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }],
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: '/node_modules/'
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract(['css-loader'])
        },
        {
          test: /\.(sass|scss)$/,
          loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        },
        
        {
          test: /\.(png|jpg)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: `[name].[ext]`,
              outputPath: './img/',
              publicPath: './img/'
            }
          }]
        }
      ]
  
    },
    plugins: [
      new HtmlWebpackPlugin({
        hash: true,
        template: './src/index.html',
        filename: './index.html'
      }),
      new ExtractTextPlugin({
        filename: 'css/styles.css',
        allChunks: true
      }),
      new CopyPlugin([{
        from: './src/img',
        to: './img'
      }]),
      new ImageminPlugin([{
        test: /\.(jpe?g|png|gif|svg)$/i
      }]),
      new PrettierPlugin()
  
    ]
  
  };