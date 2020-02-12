const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = (_env, argv) => {
  return {
    entry: './src/scripts/main.js',
    output: {
      path: path.resolve(__dirname, '_site/assets'),
      filename:
        argv.mode === 'production' ? '[name].[contenthash].js' : '[name].js'
    },
    plugins: [new ManifestPlugin()]
  };
};
