const express = require('express');
const app = express();

app.use('/index.html',express.static(__dirname+'/public/index.html'));
app.use('/proxy.html',express.static(__dirname+'/public/proxy.html'));
app.listen(4444)
console.log('server2 start');