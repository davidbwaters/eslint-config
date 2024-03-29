/**
 *  ESLint rules for eslint-plugin-import
 */

module.exports = {
  rules: {
    // Static analysis
    'import/no-unresolved': [
      'error',
      {
        commonjs: true
      }
    ],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',

    // Helpful warnings
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unused-modules': 'error',

    // Style guide
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/no-duplicates': 'error'
  }
}
