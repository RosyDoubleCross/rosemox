var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();

var dbPath = __dirname + '/../data/rosemox.db';
var needsInit = !fs.existsSync(dbPath);
var db = new sqlite3.Database(dbPath);

if (needsInit) {
    db.serialize(function() {
        db.run('CREATE TABLE mosaic (id integer not null, name text not null, width integer not null, height integer not null, atomic integer not null, content text, toplevel integer not null, primary key (id));');
        db.run('CREATE TABLE rule (id integer not null, mosaic_id integer not null, priority integer not null, minx integer, maxx integer, miny integer, maxy integer, mincopies integer not null, maxcopies integer not null, childmosaic_id integer not null, primary key (id), foreign key (mosaic_id) references mosaic(id) on update cascade on delete cascade, foreign key (childmosaic_id) references mosaic(id) on update cascade on delete cascade);');
    });
}

module.exports = db;

