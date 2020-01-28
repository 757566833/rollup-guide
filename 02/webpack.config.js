//填入以下内容
const path = require('path');
module.exports = {
  entry: './src/main.js',
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist','webpack'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs'
  }
};