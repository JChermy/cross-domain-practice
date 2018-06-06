const express = require('express');
const app = express();

app.use(express.static('./public'));
app.listen(1111);
console.log('client start');