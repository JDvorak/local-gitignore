var fs = require('fs');
var upsearch = require('utils-upsearch');
var ignore = require('ignore')();

module.exports = gitignore;
  
function gitignore (path) {
  var options = {
    'dir': path || process.cwd()
  };

  var found = upsearch.sync('.gitignore', options);

  if (found) {
    ignore.add(fs.readFileSync(found).toString())
  } else {
    throw new Error('No .gitignore detected in parent directories.')
  }
  
  return ignore;
}
