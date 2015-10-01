var template = require('./template');
var fs = require('fs');




// Допилить: Проверяем количество юзеров в домашней папке, если больше чем один
// уточняем у юзера - куда ложить файл
 var path = '../../';
 fs.readdir('/home', function (err, list) {
 	if (list.length ===  1) {
		path += '/' + list[0] + '/' + 'Шаблоны' + '/';
	};
 })

// Созадает файл с болванкой.
function createFile() {
	fs.writeFile(path + "index.html", template, function(err) {
	    if(err) alert ('Ошибка - ' + err);
	    console.log("The file was created!");
	    var close = window.confirm('Файл успешно создан и лежит в home/username/Шаблоны. Вы желаете выйти?');
	    close ? window.close() : false;
	});
}
