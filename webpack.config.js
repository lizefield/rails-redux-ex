module.exports = {
  mode: 'development',
  entry: __dirname+'/src/index.js',
  output: {
    path: __dirname+'/public/javascripts',
    filename: 'redux-bundle.js'
  }
};