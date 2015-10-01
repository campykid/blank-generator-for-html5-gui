var template = require('./template');
var fs = require('fs');


 var path = '../../';
 
// Созадает файл с болванкой.
function createFile() {
	fs.writeFile(path + "index.html", template, function(err) {
	    if(err) alert ('Ошибка - ' + err);
	    console.log("The file was created!");
	    var close = window.confirm('Файл успешно создан и лежит в home/username/Шаблоны. Вы желаете выйти?');
	    close ? window.close() : false;
	});
}
