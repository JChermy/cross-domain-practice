const express = require('express');
const app = express();

app.use(express.static( './public'));
app.listen(3333);
console.log('clientServer is running on port 3333......');