const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  const output = '_site';

  eleventyConfig.addFilter('assetPath', function(value) {
    if (process.env.ELEVENTY_ENV === 'production') {
      const manifestPath = path.resolve(
        __dirname,
        output,
        'assets',
        'manifest.json'
      );
      const manifest = JSON.parse(fs.readFileSync(manifestPath));
      return `/assets/${manifest[value]}`;
    }

    return `/assets/${value}`;
  });

  return {
    dir: { input: 'src', output }
  };
};
