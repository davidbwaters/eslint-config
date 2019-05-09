/**
 *  ESLint settings for rules that deal with stylistic
 *  issues.
 */

module.exports = {

  rules: {

    // Enforce line breaks after opening and before closing
    // array brackets
    'array-bracket-spacing': ['error', 'never', {}],

    // Enforce one true brace style
    'brace-style': ['error', 'stroustrup', {}],

    // Require trailing commas in multiline object literals
    'comma-dangle': ['error', 'never'],

    // Enforce spacing before and after comma
    'comma-spacing': ['error', { 'after': true }],

    // Enforce one true comma style
    'comma-style': ['error', 'last'],

    // Disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],

    // Enforces consistent naming when capturing the current
    // execution context
    'consistent-this': ['error', '"self"'],

    // Enforce newline at the end of file, with no multiple
    // empty lines
    'eol-last': 'error',

    // Enforce spacing between functions and their invocations
    'func-call-spacing': ['error', 'never'],

    // Enforces spacing between keys and values in object
    // literal properties
    'key-spacing': ['error', { 'afterColon': true }],

    // Require a space before & after certain keywords
    'keyword-spacing': ['error', { 'before': true, 'after': true }],

    // Disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': ['error', 'unix'],

    // Enforces empty lines around comments
    'lines-around-comment': ['error', {
      'beforeBlockComment': true,
      'afterBlockComment': true,
      'beforeLineComment': true,
      'allowBlockStart': true,
      'allowBlockEnd': true
    }],

    // Require a capital letter for constructors
    'new-cap': 'error',

    // Disallow the omission of parentheses when invoking a
    // constructor with no arguments
    'new-parens': 'error',

    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': ['error', { 'max': 2 }],

    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // Disallow use of the Object constructor
    'no-new-object': 'error',

    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'warn',

    // Disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 'warn',

    // Require padding inside curly braces
    'object-curly-spacing': ['warn', 'always', {
      'arraysInObjects': true,
      'objectsInObjects': true
    }],

    // Require assignment operator shorthand where possible
    // or prohibit it entirely
    'operator-assignment': ['error', 'always'],

    // Requires operator at the beginning of the line in multiline statements
    'operator-linebreak': ['warn', 'after'],

    // Disallow padding within blocks
    'padded-blocks': ['error', 'always'],

    // Require or disallow padding lines between statements
    'padding-line-between-statements': ['warn', {
      blankLine: 'always',
      prev: '*', next: 'return'
    }, {
        blankLine: 'always',
        prev: 'var',
        next: '*'
      }],

    // Specify whether double or single quotes should be used
    'quotes': ['error', 'single', { avoidEscape: true }],

    // Require or disallow use of semicolons instead of ASI
    'semi': ['error', 'never'],

    // Require or disallow space before blocks
    'space-before-blocks': ['warn', 'always'],

    // Require or disallow space before function opening parenthesis
    'space-before-function-paren': ['error', 'never'],

    // Require or disallow spaces inside parentheses
    'space-in-parens': ['warn', 'always', {
      'exceptions': ['{}', '[]', '()', 'empty']
    }],

    // Require spaces around operators
    'space-infix-ops': ['warn', { 'int32Hint': true }],

    // Require or disallow spaces before/after unary operators
    'space-unary-ops': ['warn', { 'words': true, 'nonwords': true }],

    // Require or disallow a space immediately following the
    // // or /* in a comment
    'spaced-comment': ['warn', 'always', {
      'exceptions': [],
      'markers': ['*']
    }]

  }

}
