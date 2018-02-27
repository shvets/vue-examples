const path = require('path');

module.exports = {
  entry: './src/example3/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    filename: 'build.js',
    library: 'demo',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, './tsconfig.json')
        }
      }
    ]
  }
};
