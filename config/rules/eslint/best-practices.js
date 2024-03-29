/**
 *  ESLint settings for rules that enforce best practices.
 */

module.exports = {
  rules: {
    // Enforce getter and setter pairs in objects
    'accessor-pairs': 'error',

    // Enforce consistent brace style for all control
    // statements (fixable)
    curly: ['error', 'multi-line'],

    // Enforce consistent newlines before and after dots
    // (fixable)
    'dot-location': ['error', 'property'],

    // Require the use of '===' and '!==' (fixable)
    eqeqeq: 'error',

    // Disallow the use of 'arguments.caller' or
    // 'arguments.callee'
    'no-caller': 'error',

    // Disallow lexical declarations in case clauses
    // (recommended)
    'no-case-declarations': 'error',

    // Disallow empty destructuring patterns (recommended)
    'no-empty-pattern': 'error',

    // Disallow extending native types
    'no-extend-native': 'off',

    // Disallow unnecessary calls to '.bind()' (fixable)
    'no-extra-bind': 'off',

    // Disallow fallthrough of 'case' statements
    // (recommended)
    'no-fallthrough': 'error',

    // Disallow leading or trailing decimal points in
    // numeric literals (fixable)
    'no-floating-decimal': 'error',

    // Disallow assignments to native objects or read-only
    // global variables (recommended)
    'no-global-assign': 'off',

    // Disallow the use of 'eval()'-like methods
    'no-implied-eval': 'error',

    // Disallow the use of the '__iterator__' property
    'no-iterator': 'error',

    // Disallow labeled statements
    'no-labels': 'error',

    // Disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // Disallow multiple spaces (fixable)
    'no-multi-spaces': 'error',

    // Disallow multiline strings
    'no-multi-str': 'error',

    // Disallow 'new' operators outside of assignments or
    // comparisons
    'no-new': 'error',

    // Disallow 'new' operators with the 'Function' object
    'no-new-func': 'error',

    // Disallow 'new' operators with the 'String', 'Number',
    // and 'Boolean' objects
    'no-new-wrappers': 'error',

    // Disallow octal literals (recommended)
    'no-octal': 'error',

    // Disallow octal escape sequences in string literals
    'no-octal-escape': 'error',

    // Disallow the use of the '__proto__' property
    'no-proto': 'error',

    // Disallow 'var' redeclaration (recommended)
    'no-redeclare': 'error',

    // Disallow assignment operators in 'return' statements
    'no-return-assign': 'error',

    // Disallow assignments where both sides are exactly the
    // same (recommended)
    'no-self-assign': 'error',

    // Disallow comparisons where both sides are exactly the
    // same
    'no-self-compare': 'error',

    // Disallow comma operators
    'no-sequences': 'error',

    // Disallow throwing literals as exceptions
    'no-throw-literal': 'error',

    // Disallow unmodified loop conditions
    'no-unmodified-loop-condition': 'error',

    // Disallow unused expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],

    // Disallow unused labels (recommended, fixable)
    'no-unused-labels': 'error',

    // Disallow unnecessary calls to '.call()' and
    // '.apply()'
    'no-useless-call': 'error',

    // Disallow unnecessary escape characters (recommended)
    'no-useless-escape': 'error',

    // Disallow with statements (recommended)
    'no-with': 'error',

    // Require parentheses around immediate 'function'
    // invocations (fixable)
    'wrap-iife': [
      'error',
      'any',
      {
        functionPrototypeMethods: true
      }
    ],

    // Require or disallow 'Yoda' conditions (fixable)
    yoda: ['error', 'never']
  }
}
