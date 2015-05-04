// adapted from https://github.com/zship/umdify
var fs = require('fs');
var path = require('path');
var glob = require('glob');
var umdify = require('umdify');

var files = glob.sync('src/kbsrc/widgets/**/*.js');

files.push('src/kbsrc/kbwidget.js');

fs.mkdir('src/umd');
fs.mkdir('src/umd/kbsrc');
fs.mkdir('src/umd/kbsrc/widgets');

files.map(function(file) {
  var filepath = file.substring(0, file.lastIndexOf('/') + 1);
  return path.join('src/umd', filepath.replace(/^src\//, ''));
}).sort().forEach(function(dir) {
  try {
    fs.mkdirSync(dir);
  }
  catch(e) {
    if(e.code !== 'EEXIST') {
      throw e;
    }
  }
});

files.forEach(function(file) {
  var contents = fs.readFileSync(file, 'utf8');
  contents = umdify(contents);
  var dest = path.join('src/umd', file.replace(/^src\//, ''));
  fs.writeFileSync(dest, contents);
});