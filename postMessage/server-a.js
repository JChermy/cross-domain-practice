const express = require('express');
const app = express();

app.use('/a.html',express.static(__dirname+'/public/a.html'));
app.listen(3333);
console.log('server-a start');