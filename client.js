const request = require('request');
const http = require('http');

const options = {
    host:'127.0.0.1',
    port: '1111',
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

const req = http.request(options, function(res) {
    console.log('status:' + res.statusCode);
    console.log('headers:' + JSON.stringify(res.headers));
    res.on('data', function (chunk) {
        console.log('body:' + chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

req.end();