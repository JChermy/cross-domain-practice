const express = require('express');
const app = express();

app.use('/a.html', express.static(__dirname+'/public/a.html'));
app.use('/c.html', express.static(__dirname+'/public/c.html'));
app.listen(3333);
console.log('server1 start')