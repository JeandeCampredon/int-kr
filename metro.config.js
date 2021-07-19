/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const includeSolution = process.env.INCLUDE_SOLUTION;

const extraNodeModules = {
  common: path.resolve(`${__dirname}/../solution`),
};
const watchFolders = includeSolution
  ? [path.resolve(`${__dirname}/../solution/native`)]
  : [];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules:
      includeSolution &&
      new Proxy(extraNodeModules, {
        get: (target, name) =>
          name in target
            ? target[name]
            : path.join(process.cwd(), `node_modules/${name}`),
      }),
  },
  watchFolders,
};
