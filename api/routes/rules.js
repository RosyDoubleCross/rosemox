var express = require('express');
var router = express.Router();

router.route('/:ruleId')
    .get(function(request, response) {
        console.log('get rule ' + request.params.ruleId);
        response.sendStatus(404);
    })
    .post(function(request, response) {
        console.log('post rule ' + request.params.ruleId);
        response.sendStatus(404);
    })
    .delete(function(request, response) {
        console.log('delete rule ' + request.params.ruleId);
        response.sendStatus(404);
    })
    .put(function(request, response) {
        console.log('put rule ' + request.params.ruleId);
        response.sendStatus(404);
    });

module.exports = router;

