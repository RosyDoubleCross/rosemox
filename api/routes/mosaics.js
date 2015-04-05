var express = require('express');
var router = express.Router();
var db = require('services/db');

var rootRoute = router.route('/');
var idRoute = router.route('/:id');

rootRoute.post(function(req, res) {
    console.log('post mosaic');
    console.log(req.body);
    if (typeof req.body.name !== 'string' || typeof req.body.width !== 'number' || typeof req.body.height !== 'number' || typeof req.body.atomic !== 'number' || (typeof req.body.content !== 'string' && req.body.content !== null) || typeof req.body.toplevel !== 'number') {
        res.sendStatus(400);
    } else {
        db.run('INSERT INTO mosaic (name, width, height, atomic, content, toplevel) VALUES ($name, $width, $height, $atomic, $content, $toplevel);', {$name: req.body.name, $width: req.body.width, $height: req.body.height, $atomic: req.body.atomic, $content: req.body.content, $toplevel: req.body.toplevel}, function(err) {
            if (err) {
                res.sendStatus(400);
            } else {
console.log('created mosaic id ' + this.lastID);
                res.location(this.lastID);
                res.sendStatus(201);
            }
        });
    }
});

idRoute.get(function(req, res) {
    console.log('get mosaic ' + req.params.id);
    db.get('SELECT * FROM mosaic WHERE id = $id', {$id: req.params.id}, function(err, row) {
        if (err) {
            res.sendStatus(500);
        } else if (!row) {
            res.sendStatus(404);
        } else {
            res.status(200).json(row);
        }
    });
});

idRoute.post(function(req, res) {
    console.log('post mosaic ' + req.params.id);
    console.log(req.body);
    res.sendStatus(404);
});

idRoute.delete(function(req, res) {
    console.log('delete mosaic ' + req.params.id);
    res.sendStatus(404);
});

idRoute.put(function(req, res) {
    console.log('put mosaic ' + req.params.id);
    res.sendStatus(404);
});

module.exports = router;

