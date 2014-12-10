var express = require('express');
var app = express();
var port = process.env.PORT || 4815;

require('./api/index.js').addRoutes(app, '/api');

app.listen(port, function() {
    console.log('listening on port ' + port);
});

