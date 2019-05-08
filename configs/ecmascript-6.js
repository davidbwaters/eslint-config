/**
 *  ESLint config to support ES6 language features.
 */

module.exports = {
  extends: './ruleset.js',
  env: {
    es6: true
  },
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  globals: {}
}
