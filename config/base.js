/**
 *  Base Config
 */

module.exports = {
  extends: [
    './rules/eslint/possible-errors.js',
    './rules/eslint/best-practices.js',
    './rules/eslint/variables.js',
    './rules/eslint/node-and-commonjs.js',
    './rules/eslint/stylistic-issues.js',
    './rules/eslint/ecmascript-6.js',
    './rules/import.js'
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {},
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['import']
}
