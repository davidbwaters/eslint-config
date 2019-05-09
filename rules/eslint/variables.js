/**
 *  ESLint settings for rules that deal with variables.
 */

module.exports = {

  rules: {

    // Disallow deletion of variables
    'no-delete-var': 'error',

    // Disallow declaration of variables already declared in
    // the outer scope
    'no-shadow': ['error', { hoist: 'all' }],

    // Disallow use of undeclared variables unless mentioned
    // in /*global */ comments
    'no-undef': 'error',

    // Disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // Disallow declaration of variables that are not used in
    // the code
    'no-unused-vars': 'warn'

  }

}
