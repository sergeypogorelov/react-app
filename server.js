const path = require('path');
const express = require('express');

const PORT = 3000;
const DIST_PATH = path.resolve(__dirname, 'dist');

var app = express();

app.use(express.static(DIST_PATH));

app.get('*', function(req, res) {
    res.sendFile(path.join(DIST_PATH, 'index.html'));
});

app.listen(PORT);

console.log('Express server is listening on port "' + PORT + '".');