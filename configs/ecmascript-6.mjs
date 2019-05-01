/**
 *  ESLint config to support ES6 language features.
 */

export default {
  extends: './ruleset.mjs',
  env: {
    es6: true
  },
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  globals: {}
}
