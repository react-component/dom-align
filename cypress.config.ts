import { defineConfig } from 'cypress';
import codeCoverage from '@cypress/code-coverage/task';
export default defineConfig({
  projectId: 'bfy1u3',
  component: {
    setupNodeEvents(on, config) {
      codeCoverage(on, config)
      return config;
    },
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
