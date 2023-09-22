module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    // 参考: https://qiita.com/madono/items/a134e904e891c5cb1d20
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    // "plugin:react/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    // "react-hooks"
    'import',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-unresolved': 'error',
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  ignorePatterns: ['./eslintrc.js'],
};
