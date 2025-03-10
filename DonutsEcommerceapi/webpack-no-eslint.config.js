const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = function(options) {
  return {
    ...options,
    externals: [nodeExternals()],
    module: {
      ...options.module,
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            transpileOnly: true,
            // Disable type checking to speed up build
            compilerOptions: {
              sourceMap: true,
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    // Disable ESLint webpack plugin
    plugins: options.plugins.filter(plugin => {
      // Filter out ESLint plugin if present
      return plugin.constructor.name !== 'ESLintWebpackPlugin';
    }),
  };
};