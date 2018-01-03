const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader'
        }
      ]
    },
    {
      test: /(\.scss|\.sass)$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader'
        },
       
        {
          loader: 'sass-loader'
        }
      ]
    }
  ]
  },
  devtool: 'cheap-module-eval-source-map',  //shows where exactly the error is generated!
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
