const base = require('@moeta/eslint-config-base')

module.exports = {
  extends: [
    '@moeta/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  overrides: base.overrides,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
      },
    }],
  },
}
