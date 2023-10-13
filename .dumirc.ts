import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  alias: {
    '@rc-component/dom-align$': path.resolve('src'),
    '@rc-component/dom-align/es': path.resolve('src'),
  },
  outputPath: '.doc',
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: '@rc-component/dom-align',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
});
