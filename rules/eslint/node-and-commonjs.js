/**
 *  ESLint settings for rules Node.js and CommonJS code.
 */

module.exports = {

  'rules': {

    // Enforce return after a callback
    'callback-return': 'warn',

    // Enforces error handling in callbacks (node
    // environment)
    'handle-callback-err': 'warn',

    // Disallow mixing regular variable and require
    // declarations
    'no-mixed-requires': ['warn', false],

    // Disallow use of new operator with the require
    // function
    'no-new-require': 'warn'

  }

}
