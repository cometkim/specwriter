/* eslint-env node */

require('@babel/register')({
  presets: [
    ['babel-preset-gatsby-package', {
      nodeVersion: 'current',
    }],
  ],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});

const config = require('./gatsby-config.ts');
delete config['__esModule'];

module.exports = {
  ...config,

  // control experimental features
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    FAST_REFRESH: true,
    PARALLEL_SOURCING: true,
  },
};
