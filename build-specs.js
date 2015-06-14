var glob = require('glob');
var path = require('path');
var fs = require('fs');
var fm = require('front-matter');
var markdown = require('markdown-js/lib').markdown;
var ejs = require('ejs');

var template = ejs.compile(fs.readFileSync('./template.ejs', 'utf8'), {});

glob('**/spec.md', function(er, files) {
  console.log(files);

  files.forEach(function(file) {
    var data = fs.readFileSync(file, 'utf8');
    var content = fm(data);
    content.body = markdown.toHTML(content.body);
    var compiledContent = template(content);
    var filename = path.join(path.dirname(file), content.attributes.componentName + '.html');
    fs.writeFileSync(filename, compiledContent);
  });

});
