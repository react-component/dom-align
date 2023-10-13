const base = require('@umijs/fabric/dist/eslint');
const path = require('path');

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    'react/no-string-refs': 0,
    'react/no-deprecated': 0,
  },
};
