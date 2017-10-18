const path = require('path');
const webpack = require('webpack');

 module.exports = {
     entry: './src/main.js',
     output: {
         path: path.resolve(__dirname, 'bin'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
