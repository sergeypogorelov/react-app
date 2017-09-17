const path = require('path');
const express = require('express');

const config = require('./app.config');

const PORT = 4648;
const APP = express();

APP.use(express.static(config.paths.dist));

APP.get('*', function(req, res) {
    res.sendFile(path.join(config.paths.dist, 'index.html'));
});

APP.listen(PORT);

console.log('Express server is listening on port "' + PORT + '".');