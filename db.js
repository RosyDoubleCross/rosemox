var fs = require('fs');
var dbPath = __dirname + '/data/rosemox.db';
var exists = fs.existsSync(dbPath);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbPath);

if (!exists) {
    db.serialize(function() {
        db.run('CREATE TABLE foo (a text)');
        var stmt = db.prepare('INSERT INTO foo VALUES (?)');
        stmt.run('blahblah');
        stmt.finalize();
    });
}

module.exports = db;

