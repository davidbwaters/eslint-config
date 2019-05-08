/**
 *  ESLint config ruleset.
 */

module.exports = {
  extends: [
    '../rules/possible-errors.js',
    '../rules/best-practices.js',
    '../rules/variables.js',
    '../rules/node.js',
    '../rules/stylistic-issues.js',
    '../rules/ecmascript-6.js'
  ]
}
