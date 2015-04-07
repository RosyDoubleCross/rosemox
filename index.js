var express = require('express');
var app = express();
var port = process.env.PORT || 4097;
var db = require(__dirname + '/models/');
var server;

require(__dirname + '/api/').addRoutes(app, db, '/api');

db.sequelize.sync().then(function() {
    server = app.listen(port, function() {
        console.log('listening on port ' + port);
    });
});

function shutdown() {
    console.log('closing express app');
    server.close(function() {
        //console.log('closing database');
        //db.close(function(err) {
            //if (err) {
                //console.log('error closing database: ' + err);
            //} else {
                //console.log('closed database');
            //}
            //console.log('exiting');
            //process.exit(0);
        //});
    });
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

