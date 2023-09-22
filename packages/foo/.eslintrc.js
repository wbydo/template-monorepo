const { resolve } = require('path');

const options = {
  project: [resolve(__dirname, './tsconfig.json')],
  tsconfigRootDir: __dirname,
};

module.exports = {
  extends: ['@~/eslint-config'],
  parserOptions: options,
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        ...options,
      },
    },
  },
};
