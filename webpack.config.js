module.exports = {
    // Bundles all the js files imported in index.js
    entry: './src/index.js',
    // Bundles all the js files as bundle.js
    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'bundle.js'
    },
    // Serve our application to browser
    devServer: {
      contentBase: './public'
    }
  };