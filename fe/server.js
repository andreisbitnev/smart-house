var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res) {
    res.sendFile('index.html');
});

app.listen(4200, function () {
  console.log('fe running on port 4200');
});