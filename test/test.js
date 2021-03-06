
'use strict'

const assert = require('assert')
const eslint = require('eslint')

const config = require('../')

const Linter = eslint.CLIEngine

const files = [
  'config/**',
  'test/test.js'
]

// Run the linter on the repo files and assert no errors
// are found

const report = new Linter(config).executeOnFiles(files)

const passed = report.errorCount + report.warningCount === 0

if (passed) {

  console.log('Test passed.')

}
else {

  console.log(report)
  assert.equal(passed, true)

}
