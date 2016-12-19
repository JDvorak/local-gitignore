var assert = require('assert');
var gitignore = require('../index.js');
var fs = require('fs');

/*
  Verify that path defaults to process.cwd()
*/
assert(process.cwd() !== __dirname, 'Please run this test from project directory.')
var parentCases = fs.readFileSync(__dirname + '/../.gitignore', 'utf8').split('\n');
var testDirectory = gitignore()
parentCases.forEach(function(ea) {
  assert(testDirectory.ignores(ea) === true, 'Failed to ignore simple string in .gitignore')
})


/*
  Verify that gitignore is being called correctly.
*/
var localCases = fs.readFileSync(__dirname + '/.gitignore', 'utf8').split('\n');
var testDirectory = gitignore(__dirname)
localCases.forEach(function(ea) {
  assert(testDirectory.ignores(ea) === true, 'Failed to ignore simple string in .gitignore')
})

/*
  Verify that upsearch is being called correctly.
*/
var nestedCases = fs.readFileSync(__dirname + '/nested/.gitignore', 'utf8').split('\n');
var nestedDirectory = gitignore('__dirname/nested/deeper/');
nestedCases.forEach(function(ea) {
  assert(nestedDirectory.ignores(ea) === true, 'Failed to ignore simple string in parent directory .gitignore')
})

console.log('All tests passing.')