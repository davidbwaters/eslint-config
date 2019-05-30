/**
 *  ESLint config to support ES6 features in modern browsers
 *  and Node.js.
 */

module.exports = {
  extends: './ruleset.js',
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  globals: {}
}
