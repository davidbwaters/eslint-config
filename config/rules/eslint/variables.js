/**
 *  ESLint settings for rules that deal with variables.
 */

module.exports = {
  rules: {
    // Disallow deleting variables (recommended)
    'no-delete-var': 'error',

    // Disallow labels that share a name with a variable
    'no-label-var': 'error',

    // Disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': 'error',

    // Disallow the use of undeclared variables unless
    // mentioned in '/*global */' comments (recommended)
    'no-undef': 'error',

    // Disallow initializing variables to 'undefined'
    'no-undef-init': 'error',

    // Disallow unused variables (recommended)
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true
      }
    ],

    // Disallow the use of variables before they are defined
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false
      }
    ]
  }
}
