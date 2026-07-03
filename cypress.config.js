const { defineConfig } = require('cypress');
const codeCoverage = require('@cypress/code-coverage/task');

module.exports = defineConfig({
  projectId: 'bfy1u3',
  component: {
    setupNodeEvents(on, config) {
      codeCoverage(on, config);
      return config;
    },
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: {
        module: {
          rules: [
            {
              test: /\.[jt]sx?$/,
              exclude: /node_modules/,
              use: {
                loader: require.resolve('babel-loader'),
                options: {
                  presets: [
                    require.resolve('@babel/preset-env'),
                    [
                      require.resolve('@babel/preset-react'),
                      {
                        runtime: 'automatic',
                      },
                    ],
                    require.resolve('@babel/preset-typescript'),
                  ],
                },
              },
            },
            {
              test: /\.css$/,
              use: [require.resolve('style-loader'), require.resolve('css-loader')],
            },
          ],
        },
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
    },
  },
});
