const express = require('express');
const app = express();

app.use('/b.html',express.static(__dirname+'/public/b.html'));
app.listen(4444);
console.log('server-b start');