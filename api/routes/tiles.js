var express = require('express');
var router = express.Router();

router.route('/:tileId')
    .get(function(request, response) {
        console.log('get tile ' + request.params.tileId);
        response.sendStatus(404);
    })
    .post(function(request, response) {
        console.log('post tile ' + request.params.tileId);
        response.sendStatus(404);
    })
    .delete(function(request, response) {
        console.log('delete tile ' + request.params.tileId);
        response.sendStatus(404);
    })
    .put(function(request, response) {
        console.log('put tile ' + request.params.tileId);
        response.sendStatus(404);
    });

module.exports = router;

