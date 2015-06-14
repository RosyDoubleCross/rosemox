
module.exports.addRoute = function(app, prefix) {

    var express = require('express');

    console.log('[' + prefix + '] configuring public static');

    app.use(prefix, express.static(__dirname + '/public/'));

};

