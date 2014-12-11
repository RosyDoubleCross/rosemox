var express = require('express');
var router = express.Router();

router.route('/:mosaicId')
    .get(function(request, response) {
        console.log('get mosaic ' + request.params.mosaicId);
        response.sendStatus(404);
    })
    .post(function(request, response) {
        console.log('post mosaic ' + request.params.mosaicId);
        response.sendStatus(404);
    })
    .delete(function(request, response) {
        console.log('delete mosaic ' + request.params.mosaicId);
        response.sendStatus(404);
    })
    .put(function(request, response) {
        console.log('put mosaic ' + request.params.mosaicId);
        response.sendStatus(404);
    });

module.exports = router;

