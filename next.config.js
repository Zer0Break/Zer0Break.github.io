const withTwin = require('./withTwin.js');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [withTwin, {
    reactStrictMode: true,
    images: {
      domains: [
        "scontent-bos5-1.xx.fbcdn.net"
      ],
    },
    webpack(config) {
      // Grab the existing rule that handles SVG imports
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg'),
      )

      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: /url/ }, // exclude if *.svg?url
          use: ['@svgr/webpack'],
        },
      )

      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i

      return config
    },
  }],

  // [withReactSvg, {
  //   include: path.resolve(__dirname, './src/images/svg'),
  //   webpack(config, options) {
  //     return config
  //   },

  // }],


])
