var shelljs = require('shelljs/global'),
	path = require('path');

rm('-rf','static');
mkdir('static');
cd('static');
exec('wget --mirror --convert-links --adjust-extension --page-requisites --no-parent --no-host-directories http://127.0.0.1:2368');
cd('../');

var fs = require('fs'),
	site = 'static',
	filetype = '.html';

var walk = function(dir, done)
{
	var results = [];
	fs.readdir(dir, function(err, list) {
		if (err) return done(err);
		var pending = list.length;
		if (!pending) return done(null, results);
		list.forEach(function(file) {
			file = dir + '/' + file;
			fs.stat(file, function(err, stat) {
				if (stat && stat.isDirectory()) {
					walk(file, function(err, res) {
						results = results.concat(res);
						if (!--pending) done(null, results);
					});
				} else {
					if(file.indexOf(filetype) != -1)
					{
						results.push(file);
					}
					if (!--pending) done(null, results);
				}
			});
		});
	});
};

var replace = function(file, search, replace)
{
	var encoding = 'utf8',
		contents = fs.readFileSync(file, encoding);
	
	contents = contents.replace(new RegExp(search, 'g'), replace);
	fs.writeFileSync(file, contents, encoding);
}

walk(__dirname + '/' + site, function(err, results){

	if(err) throw err;
	results.forEach(function(file) {
		replace(file, '\/index\.html', '\/');
	});

});