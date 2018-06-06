const http = require('http');

http.createServer(function (req, res) {
    //设置响应头部
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('This is a server page');
    res.end();
  }).listen(3333);
   console.log('server start!')