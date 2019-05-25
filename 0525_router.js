var http = require('http');
var url = require("url")
var fs = require("fs")
// 似乎是动态加载的
var uc = require("upper-case")

http.createServer(function (req, res) {
	// 根据 url 找到文件名，渲染文件
	var q = url.parse(req.url, true)
	var path = "." +q.pathname;
	fs.readFile(path, function(err, data){
		// 404 
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404, not found");
		}

		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(data);
		// return ?
		return res.end();
	})


}).listen(8888);

// 终端打印如下信息

console.log('Server running at http://127.0.0.1:8888/');