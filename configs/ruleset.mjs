/**
 *  ESLint config ruleset.
 */

export default {
  extends: [
    '../rules/possible-errors.mjs',
    '../rules/best-practices.mjs',
    '../rules/variables.mjs',
    '../rules/node.mjs',
    '../rules/stylistic-issues.mjs',
    '../rules/ecmascript-6.mjs'
  ]
}
