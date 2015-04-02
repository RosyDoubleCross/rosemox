var express = require('express');
var router = express.Router();
var db = require('services/db');

router.route('/:id')
    .get(function(req, res) {
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
    })
    .post(function(req, res) {
        console.log('post mosaic ' + req.params.id);
        res.sendStatus(404);
    })
    .delete(function(req, res) {
        console.log('delete mosaic ' + req.params.id);
        res.sendStatus(404);
    })
    .put(function(req, res) {
        console.log('put mosaic ' + req.params.id);
        res.sendStatus(404);
    });

module.exports = router;

