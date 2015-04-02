var express = require('express');
var app = express();
var port = process.env.PORT || 4097;
var db = require('services/db');

require(__dirname + '/api/index.js').addRoutes(app, '/api');

var server = app.listen(port, function() {
    console.log('listening on port ' + port);
});

function shutdown() {
    console.log('closing express app');
    server.close(function() {
        console.log('closing database');
        db.close(function(err) {
            if (err) {
                console.log('error closing database: ' + err);
            } else {
                console.log('closed database');
            }
            console.log('exiting');
            process.exit(0);
        });
    });
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

