const http = require('http');
const server = new http.Server();
const qs = require('querystring');

server.on('request', function(request, response) {
    const query = require('url').parse(request.url, true).query;
    response.writeHead(200, {
        'Set-Cookie': 'name=amiee;Path:/;Domain:localhost:3333;Httponly'
    });

    response.write(`Hi, ${query.name} ! I come from localhost:5555`);
    response.end();
})

server.listen('5555');
console.log('Server is running at port 5555 .....')