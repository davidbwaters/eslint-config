/**
 *  ESLint config to support ES6 features in modern browsers
 *  and Node.js.
 */

module.exports = {
  extends: './ecmascript-6.js',
  env: {
    browser: true,
    node: true
  }
}
