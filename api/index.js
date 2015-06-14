
module.exports.addRoutes = function(app, prefix) {

    var db = app.get('db');
    var bodyParser = require('body-parser');
    var epilogue = require('epilogue');

    app.use(prefix, bodyParser.json());

    epilogue.initialize({
        app: app,
        sequelize: db.sequelize,
        base: prefix
    });

    console.log('creating mosaic routes');

    epilogue.resource({
        model: db.Mosaic,
        endpoints: ['/mosaic', '/mosaic/:id']
    });

    console.log('creating rule routes');

    epilogue.resource({
        model: db.Rule,
        include: [db.Mosaic],
        endpoints: ['/rule', '/rule/:id']
    });

    console.log('adding catchall 404 route for ' + prefix);

    app.use(prefix, function (req, res, next) {
        res.sendStatus(404);
    });
};

