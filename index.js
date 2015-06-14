var express = require('express');
var app = express();
var port = process.env.PORT || 4097;
var db = require(__dirname + '/models/');
var server;

require(__dirname + '/api/').addRoutes(app, db, '/api');

console.log('adding catchall 404 route for /');

app.use('/', function (req, res, next) {
    res.sendStatus(404);
});

db.sequelize.sync().then(function() {
    server = app.listen(port, function() {
        console.log('listening on port ' + port);
    });
});

function shutdown() {
    //console.log('closing database');
    //db.sequelize.close();
    //console.log('closing express app');
    //server.close();
    console.log('exiting');
    process.exit(0);
    /*
    db.sequelize.close(function(err) {
        if (err) {
            console.log('error closing database: ' + err);
        } else {
            console.log('closed database');
        }
        console.log('closing express app');
        server.close(function() {
            console.log('closed express app');
            //console.log('exiting');
            //process.exit(0);
        });
    });
    */
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

