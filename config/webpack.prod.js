const path = require('path');

module.exports = function(config) {
  // Add your custom Production Webpack Configuration inside of here
   
  // Resolve
  let resolve = config.module.resolve;
  console.log(resolve);
  // loaderList.splice(loaderList.length - 1, 0, {
  //   test: /\.scss$/,
  //   use: ["style-loader", "css-loader", "sass-loader"]
  // });
  resolve = {
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-compat",
      'create-react-class': 'preact-compat/lib/create-react-class'
    }
  }
}
