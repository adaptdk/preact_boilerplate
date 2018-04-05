/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Defining relative path
const srcPath = path.join(__dirname, '../src/'),
  buildPath = path.join(__dirname, '../build/');

module.exports = function (config) {
  // Resolve React Modules for Preact
  let resolve = config.resolve;
  resolve = {
    'alias': {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  };

  // Add the SASS loader
  let loaderList = config.module.rules[1].oneOf;
  loaderList.splice(loaderList.length - 1, 0, {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader',
        options: {
          importLoaders: true,
          minimize: true,
        }
      },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: function () {
              return [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ]
                }),
                require('postcss-flexbugs-fixes'),
                require('postcss-calc'),
                require('postcss-inline-svg')({
                  path: srcPath + '/assets/icons',
                }),
              ];
            }
          }
        },
        {
          loader: 'sass-loader',
        }
      ],
    }),
  });

  // Add the plugins
  let plugins = config.plugins;
  plugins = [

    // CSS Plugin
    new ExtractTextPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      allChunks: true,
    }),

    // CSS Plugin
    // Split the bundle from vendor into another chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash:8].js',
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
  ];
};
