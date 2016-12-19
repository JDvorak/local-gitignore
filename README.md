# local-gitignore

[`ignore`][ignore] is a tool which implements in pure JavaScript the .gitignore [spec](http://git-scm.com/docs/gitignore).
[`upsearch`][upsearch] is a tool for finding files in parent directories.

Together a micro utility library is born. 

## Usage

```bash
# OS or Editor folders
.DS_Store
._*
.cache
.project

# Directories
node_modules
old/
*-old/
```

```js
var ig = require('local-gitignore')
```

### Filter the given paths

```js
var paths = [
  '.DS_STORE',    // filtered out
  'node_modules/bixby/index.js',    // filtered out
  'index.js'   // included
]

ig.filter(paths)  // ['index.js']
```

### Generate a filter function

```js
paths.filter(ig.createFilter()); // ['index.js']
```

### Use as a quick boolean value returning test function
```js
ig.ignores('.DS_Store') // true
ig.ignores('project/index.js') // false
```

## Why such a small library?

I was looking for exactly this functionality when I came across the excellent [ignore] library. So, I'm publishing what past me was looking for in the first place. 


[upsearch]: https://github.com/kgryte/utils-upsearch
[ignore]: https://github.com/kaelzhang/node-ignore
