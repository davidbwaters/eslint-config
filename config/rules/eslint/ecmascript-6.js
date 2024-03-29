/**
 *  ESLint settings for rules pertaining to code written
 *  with ES6.
 */

module.exports = {
  rules: {
    // Enforce consistent spacing before and after the arrow
    // in arrow functions (fixable)
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],

    // Require 'super()' calls in constructors (recommended)
    'constructor-super': 'error',

    // Enforce consistent spacing around '*' operators in
    // generator functions (fixable)
    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],

    // Disallow reassigning class members (recommended)
    'no-class-assign': 'error',

    // Disallow reassigning 'const' variables (recommended)
    'no-const-assign': 'error',

    // Disallow duplicate class members (recommended)
    'no-dupe-class-members': 'error',

    // Disallow 'new' operators with the 'Symbol' object
    // (recommended)
    'no-new-symbol': 'error',

    // Disallow 'this'/'super' before calling 'super()' in
    // constructors (recommended)
    'no-this-before-super': 'error',

    // Disallow unnecessary computed property keys in object
    // literals
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructors
    'no-useless-constructor': 'error',

    // Disallow renaming import, export, and destructured
    // assignments to the same name (fixable)
    'no-useless-rename': 'error',

    // Enforce spacing between rest and spread operators and
    // their expressions (fixable)
    'rest-spread-spacing': ['error', 'never'],

    // Require or disallow spacing around embedded
    // expressions of template strings (fixable)
    'template-curly-spacing': ['error', 'never'],

    // Require or disallow spacing around the '*' in
    // 'yield*' expressions (fixable)
    'yield-star-spacing': ['error', 'both']
  }
}
