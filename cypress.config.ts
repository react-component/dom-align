import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'bfy1u3',
  component: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);

      return config;
    },
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
