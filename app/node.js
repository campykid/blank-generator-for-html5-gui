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


// Созадает файл с болванкой.
function createFile() {
	fs.writeFile(path + "index.html", skelet, function(err) {
	    if(err) throw err;
	    console.log("The file was created!");
	});
}

// Проверяем количество юзеров в домашней папке, если больше чем один
// уточняем у юзера - куда ложить папек
 var path = '/home';
 fs.readdir('/home', function (err, list) {
 
	if (list.length ===  1) {

		path += '/' + list[0] + '/' + 'Шаблоны';
		fs.readdir(path, function (err, list){
			function createFile() {
				fs.writeFile(path + "index.html", skelet, function(err) {
				    if(err) throw err;
				    console.log("The file was created!");
				});
			}
		})

	};

 })
