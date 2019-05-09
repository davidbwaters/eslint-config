/**
 *  ESLint settings for rules pertaining to code written
 *  with ES6.
 */

module.exports = {

  'rules': {

    // Require parens in arrow function arguments
    'arrow-parens': ['warn', 'as-needed'],

    // Require space before/after arrow function's arrow
    'arrow-spacing': [
      'warn',
      { before: true, after: true }
    ],

    // Verify super() callings in constructors
    'constructor-super': 'error',

    // Enforce the spacing around the * in generator functions
    'generator-star-spacing': ['error', 'both'],

    // Disallow modifying variables of class declarations
    'no-class-assign': 'error',

    // Disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // Disallow duplicate class members
    'no-dupe-class-members': 'error',

    // Disallow symbol constructor
    'no-new-symbol': 'error',

    // Disallow to use this/super before super() calling in
    // constructors.
    'no-this-before-super': 'error',

    // Require let or const instead of var
    'no-var': 'warn',

    // Require method and property shorthand syntax for
    // object literals
    'object-shorthand': ['warn', 'always'],

    // Suggest using of const declaration for variables that
    // are never modified after declared
    'prefer-const': 'warn',

    // Suggest using the spread operator instead of .apply()
    'prefer-spread': 'warn',

    // Disallow generator functions that do not have yield
    'require-yield': 'error'
  }

}
