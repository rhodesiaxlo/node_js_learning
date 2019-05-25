var http = require('http');
var url = require("url")
var fs = require("fs")

http.createServer(function (req, res) {
	fs.readFile('serverfile.html', function(err, data){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(data);
		res.end();
	})

	fs.open('newfile.html', 'w', function(err, data){
		if (err) throw err;
		console.log("file created successfully!");
	})

	fs.appendFile("append.html", "appendtext", function(err) {
		if (err) throw err;
		console.log("append successfully");
	})

	fs.writeFile("normalfile.html", function(err, data) {
		if (err) throw err;
		console.log("write file successfully");
	})

}).listen(8888);

// 终端打印如下信息

console.log('Server running at http://127.0.0.1:8888/');