const http = require('http');
const server = http.createServer();
const qs = require('querystring');

server.on('request', function(req, res) {
    const query = require('url').parse(req.url, true).query;

    //向前台写cookie
    res.writeHead(200, {
        'Set-Cookie' : 'name=jchermy;Path:/;Domain:localhost;Httponly' //HttpOnly 脚本无法读取
    });
   
    res.write(JSON.stringify('Hi! '+query.user));
    res.end();
})

server.listen('9999');
console.log('Server is running at port 9999 .....');