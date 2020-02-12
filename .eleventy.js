const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  const outputDir = '_site';
  const assetDir = 'assets';

  eleventyConfig.addFilter('assetPath', function(value) {
    if (process.env.ELEVENTY_ENV === 'production') {
      const manifestPath = path.resolve(
        __dirname,
        outputDir,
        assetDir,
        'manifest.json'
      );
      const manifest = JSON.parse(fs.readFileSync(manifestPath));
      return `/${assetDir}/${manifest[value]}`;
    }

    return `/${assetDir}/${value}`;
  });

  return {
    dir: { input: 'src', output: outputDir }
  };
};
