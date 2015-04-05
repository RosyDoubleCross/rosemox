
module.exports.addRoutes = function(app, prefix) {

    var bodyParser = require('body-parser');
    var fs = require('fs');
    var routesPath = __dirname + '/routes/';

    app.use(prefix, bodyParser.json());

    fs.readdirSync(routesPath).forEach(function(file) {
        var route = prefix + '/' + file.replace(/\.js$/, '');
        var router = require(routesPath + file);
        console.log('adding route ' + route);
        app.use(route, router);
    });

    console.log('adding catchall 404 route for ' + prefix);

    app.use(prefix, function (req, res, next) {
        res.sendStatus(404);
    });
};

