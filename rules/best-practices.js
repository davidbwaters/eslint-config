/**
 *  ESLint settings for rules that enforce best practices.
 */

module.exports = {

  'rules': {

    // Enforces getter/setter pairs in objects
    'accessor-pairs': 'off',

    // Treat var statements as if they were block scoped
    'block-scoped-var': 'error',

    // Require return statements to either always or never
    // specify values
    'consistent-return': 'error',

    // Specify curly brace conventions for all control
    // statements
    'curly': ['error', 'all'],

    // Require default case in switch statements
    'default-case': 'error',

    // Encourages use of dot notation whenever possible
    'dot-notation': 'error',

    // Enforces consistent newlines before or after dots
    'dot-location': ['error', 'object'],

    // Require the use of === and !==
    'eqeqeq': ['error', 'smart'],

    // Make sure for-in loops have an if statement
    'guard-for-in': 'error',

    // Disallow lexical declarations in case/default clauses
    'no-case-declarations': 'error',

    // Disallow division operators explicitly at beginning
    // of regular expression
    'no-div-regex': 'error',

    // Disallow else after a return in an if
    'no-else-return': 'error',

    // Disallow empty destructuring patterns
    'no-empty-pattern': 'error',

    // Disallow comparisons to null without a type-checking
    // operator
    'no-eq-null': 'error',

    // Disallow unnecessary function binding
    'no-extra-bind': 'error',

    // Disallow fallthrough of case statements
    'no-fallthrough': 'error',

    // Disallow the use of leading or trailing decimal
    // points in numeric literals
    'no-floating-decimal': 'error',

    // Disallow reassignments of native objects or read-only
    // globals
    'no-global-assign': 'error',

    // Disallow use of labels for anything other then loops
    // and switches
    'no-labels': 'error',

    // Disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // Disallow creation of functions within loops
    'no-loop-func': 'error',

    // Disallow use of multiline strings
    'no-multi-str': 'error',

    // Disallow use of new operator when not part of the
    // assignment or comparison
    'no-new': 'error',

    // Disallow use of new operator for Function object
    'no-new-func': 'error',

    // Disallows creating new instances of String, Number,
    // and Boolean
    'no-new-wrappers': 'error',

    // Disallow use of (old style) octal literals
    'no-octal': 'error',

    // Disallow reassignment of function parameters
    'no-param-reassign': ['error', { 'props': true }],

    // Disallow declaring the same variable more then once
    'no-redeclare': 'error',

    // Disallow use of assignment in return statement
    'no-return-assign': ['error', 'always'],

    // Disallow self assignment
    'no-self-assign': 'error',

    // Disallow self assignment
    'no-self-compare': 'error',

    // Disallow unused labels
    'no-unused-labels': 'error',

    // Disallow unnecessary .call() and .apply()
    'no-useless-call': 'error',

    // Disallow unnecessary catch clauses
    'no-useless-escape': 'error',

    // Require or disallow Yoda conditions
    yoda: 'error'

  }

}
