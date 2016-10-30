var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var config = {
  context: path.join(__dirname, '..', '/root/src'),
  entry: {
    index: './index/start',
    vendors: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, '..', '/root/dist'),
    filename: '[name].bundle.[hash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')), // judge if dev environment.
      __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false')) // judge if secret environment.
    }),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 20000 }),
    new webpack.optimize.OccurenceOrderPlugin(false),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true
    }),
    new CommonsChunkPlugin('vendors', 'vendors.[hash].js', Infinity),
    new ExtractTextPlugin("[name].[hash].css"),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: './../templates/index.deploy.html',
      filename: 'index.html',
      chunks: ['index', 'vendors'],
      inject: 'body',
      hash: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}!sass')
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=10000!img?progressive=true'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    // 設定後只需要寫 require('file') 而不用寫成 require('file.jsx')
    extensions: ['', '.js', '.json', '.jsx']
  },
  externals: {
    react: "React",
    'react-dom': "ReactDOM",
    lodash: "_"
  },
};

module.exports = config;