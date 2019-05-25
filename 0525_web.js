var http = require('http');
var url = require("url")

http.createServer(function (request, response) {

// 发送 HTTP 头部

// HTTP 状态值: 200 : OK

// 内容类型: text/plain

response.writeHead(200, {'Content-Type': 'text/plain'});

// 发送响应数据 "Hello World"
// 查询字符串
var q = url.parse(request.url, true).query;
var text = "year = " + q.year + " month =" + q.month;
response.write("url = "+request.url+"\n");
response.write(' query string ' + text + "\n");
response.write("pretending there is something "+ "\n");
response.end('Hello World\n');

}).listen(8888);

// 终端打印如下信息

console.log('Server running at http://127.0.0.1:8888/');