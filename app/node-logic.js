// Болванка.
var skelet = [ 
'<!DOCTYPE html>',
'\n<html>',
'\n<head>\n\t<meta charset="UTF-8">',
'\n\t<title>Document</title>',
'\n\t<style>',
'\n',
'\n\t</style>',
'\n</head>',
'\n\t<body>',
'\n',	
'\n\t</body>',
'\n\t<script type="text/javascript">',
'\n',
'\n\t</script>',
'\n</html>'
].join('')


var fs = require('fs');




// Допилить: Проверяем количество юзеров в домашней папке, если больше чем один
// уточняем у юзера - куда ложить файл
 var path = '/home';
 fs.readdir('/home', function (err, list) {
 	if (list.length ===  1) {
		path += '/' + list[0] + '/' + 'Шаблоны' + '/';
	};
 })

// Созадает файл с болванкой.
function createFile() {
	fs.writeFile(path + "index.html", skelet, function(err) {
	    if(err) alert ('Ошибка - ' + err);
	    console.log("The file was created!");
	    var close = window.confirm('Файл успешно создан и лежит в home/username/Шаблоны. Вы желаете выйти?');
	    close ? window.close() : false;
	});
}