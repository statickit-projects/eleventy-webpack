const path = require('path');

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, '_site/assets'),
    filename: 'main.js'
  }
};
