var http = require('http');
var dt = require("./0525_local_modules")

http.createServer(function (request, response) {

// 发送 HTTP 头部

// HTTP 状态值: 200 : OK

// 内容类型: text/plain

response.writeHead(200, {'Content-Type': 'text/plain'});

// 发送响应数据 "Hello World"

response.write(" The date and time are currently : " + dt.myDateTime())
response.end('Hello World\n');

}).listen(8888);

// 终端打印如下信息

console.log('Server running at http://127.0.0.1:8888/');