/* eslint-disable */
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

// Defining relative path
const srcPath = path.join(__dirname, '../src/'),
  buildPath = path.join(__dirname, '../build/');

module.exports = function(config) {
  // Resolve React Modules for Preact
  let resolve = config.resolve;
  resolve = {
    "alias": {
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  };

  // Use your own ESLint file
  let eslintLoader = config.module.rules[0];
  eslintLoader.use[0].options.useEslintrc = true;

  // Add the SASS loader
  let loaderList = config.module.rules[1].oneOf;
  loaderList.splice(loaderList.length - 1, 0, {
    test: /\.scss$/,
    use: [{
      loader: 'style-loader'
    }, {
      loader: 'css-loader?importLoaders=1'
    }, {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: function() {
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
    }, {
      loader: 'sass-loader'
    }]
  });
};
