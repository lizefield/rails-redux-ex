module.exports = {
  mode: 'development',
  entry: __dirname+'/src/index.js',
  output: {
    path: __dirname+'/public/javascripts',
    filename: 'redux-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(app|node_modules|vendor)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};