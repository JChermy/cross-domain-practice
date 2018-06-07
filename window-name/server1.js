const express = require('express');
const app = express();

app.use('/iframe.html',express.static(__dirname+'/public/iframe.html'));
app.listen(3333)
console.log('server1 start');