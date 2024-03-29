/**
 *  ESLint settings for rules Node.js and CommonJS code.
 */

module.exports = {
  rules: {
    // Require error handling in callbacks
    'handle-callback-err': ['error', '^(err|error)$'],

    // Disallow 'new' operators with calls to 'require'
    'no-new-require': 'error',

    // Disallow string concatenation with '__dirname' and
    // '__filename'
    'no-path-concat': 'error'
  }
}
