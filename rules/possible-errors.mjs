/**
 *  ESLint settings for rules pertaining to possible errors.
 *
 *  http://eslint.org/docs/rules/#possible-errors
 */

export default {

  "rules": {

    // Enforce “for” loop update clause moving the counter
    // in the right direction
    "for-direction": "error",

    // Enforces that a return statement is present in 
    // property getters
    "getter-return": "error",

    // Disallow comparisons to negative zero
    "no-compare-neg-zero": "error",

    // Disallow assignment in conditional expressions
    "no-cond-assign": "error",

    // Disallow use of console
    "no-console": "warn",

    // Disallow use of constant expressions in conditions
    "no-constant-condition": "warn",

    // Disallow control characters in regular expressions
    "no-control-regex": "error",

    // Disallow use of debugger
    "no-debugger": "error",

    // Disallow duplicate arguments in functions
    "no-dupe-args": "error",

    // Disallow duplicate keys when creating object literals
    "no-dupe-keys": "error",

    // Disallow a duplicate case label.
    "no-duplicate-case": "error",

    // Disallow empty statements
    "no-empty": "error",

    // Disallow the use of empty character classes in 
    // regular expressions
    "no-empty-character-class": "error",

    // Disallow assigning to the exception in a catch block
    "no-ex-assign": "error",

    // Disallow double-negation boolean casts in a boolean 
    // context
    "no-extra-boolean-cast": "error",

    // Disallow unnecessary parentheses
    "no-extra-parens": ["error", "all"],

    // Disallow unnecessary semicolons
    "no-extra-semi": "error",

    // Disallow overwriting functions written as function 
    // declarations
    "no-func-assign": "error",

    // Disallow function or variable declarations in nested 
    // blocks
    "no-inner-declarations": "error",

    // Disallow invalid regular expression strings in the 
    // RegExp constructor
    "no-invalid-regexp": "error",

    // Disallow irregular whitespace outside of strings and 
    // comments
    "no-irregular-whitespace": "error",

    // Disallow the use of object properties of the global 
    // object as functions
    "no-obj-calls": "error",

    // Disallow multiple spaces in a regular expression 
    // literal
    'no-regex-spaces': 'error',

    // Disallow sparse arrays
    'no-sparse-arrays': 'error',

    // Avoid code that looks like two expressions but is 
    // actually one
    'no-unexpected-multiline': 'error',

    // Disallow unreachable statements after a return, 
    // throw, continue, or break statement
    'no-unreachable': 'error',

    // Disallow return/throw/break/continue inside finally 
    // blocks
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational 
    // operators
    'no-unsafe-negation': 'error',

    // Disallow comparisons with the value NaN
    'use-isnan': 'error',

    // Ensure that the results of typeof are compared 
    // against a valid string
    'valid-typeof': 'error'

  }

}
