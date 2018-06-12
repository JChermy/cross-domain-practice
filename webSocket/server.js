const http = require('http');
const socket = require('socket.io');
 
//启动http服务
const server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.end();
})

server.listen(5555);
console.log('server is running at port 5555');

const io = socket(server);
//监听socket连接
io.on('connection', function (client) {
    //接收消息
    client.on('message', function (msg) {
        io.emit('message',  `hello, ${msg}`);
        console.log('data from client --->' + msg);
      });

      //断开处理
      client.on('disconnect', function() {
          console.log('Client socket has closed');
      });
});