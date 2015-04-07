
module.exports.addRoutes = function(app, db, prefix) {

    var bodyParser = require('body-parser');
    var epilogue = require('epilogue');

    app.use(prefix, bodyParser.json());

    epilogue.initialize({
        app: app,
        sequelize: db.sequelize,
        base: prefix
    });

    epilogue.resource({
        model: db.Mosaic,
        endpoints: ['/mosaic', '/mosaic/:id']
    });

    epilogue.resource({
        model: db.Rule,
        endpoints: ['/rule', '/rule/:id']
    });

    console.log('adding catchall 404 route for ' + prefix);

    app.use(prefix, function (req, res, next) {
        res.sendStatus(404);
    });
};

