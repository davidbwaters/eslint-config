/**
 *  ESLint config to support ES6 features in modern browsers
 *  and Node.js.
 */

export default {
  extends: './ecmascript-6.mjs',
  env: {
    browser: true,
    node: true
  }
}
