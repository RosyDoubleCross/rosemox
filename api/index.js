var mosaics = require('./routes/mosaics.js');
var rules = require('./routes/rules.js');

module.exports.addRoutes = function(app, prefix) {
    app.use(prefix + '/mosaics', mosaics);
    app.use(prefix + '/rules', rules);
    app.route(new RegExp('^' + prefix + '(/.*)?$'))
        .all(function (request, response) {
            response.sendStatus(404);
        });
};

