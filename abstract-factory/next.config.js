const withImages = require('next-images');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withImages({
  publicRuntimeConfig: {},
  trailingSlash: false,
  webpack(config, options) {
    const { dev, isServer, webpack } = options;

    // Do not run type checking twice:
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    config.plugins.push( new webpack.IgnorePlugin(/^(?:electron|ws)$/));

    return config;
  },
});
