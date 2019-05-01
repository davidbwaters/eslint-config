/**
 *  ESLint settings for rules pertaining to code written
 *  with ES6.
 */

export default recommended = {

  'rules': {

    // Require parens in arrow function arguments
    'arrow-parens': ['warning', 'as-needed'],

    // Require space before/after arrow function's arrow
    'arrow-spacing': [
      'warning',
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
    'no-var': 'warning',

    // Require method and property shorthand syntax for
    // object literals
    'object-shorthand': ['warning', 'always'],

    // Suggest using of const declaration for variables that
    // are never modified after declared
    'prefer-const': 'warning',

    // Suggest using the spread operator instead of .apply()
    'prefer-spread': 'warning',

    // Disallow generator functions that do not have yield
    'require-yield': 'error'
  }

}
