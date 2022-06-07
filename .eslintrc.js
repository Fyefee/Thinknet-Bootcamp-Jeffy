module.exports = {
  extends: ['airbnb-base'],
  parser: '@babel/eslint-parser',
  rules: {
    'no-unused-expressions': 'off',
    'max-len': 'off',
    'prefer-promise-reject-errors': 'off',
    semi: ['error', 'never'],
  },
}
