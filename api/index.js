
module.exports.addRoute = function(app, prefix) {

    var db = app.get('db');
    var bodyParser = require('body-parser');
    var epilogue = require('epilogue');

    console.log('[' + prefix + '] adding bodyParser JSON');

    app.use(prefix, bodyParser.json());

    console.log('[' + prefix + '] preparing epilogue');

    epilogue.initialize({
        app: app,
        sequelize: db.sequelize,
        base: prefix
    });

    console.log('[' + prefix + '] creating mosaic routes');

    epilogue.resource({
        model: db.Mosaic,
        endpoints: ['/mosaic', '/mosaic/:id']
    });

    console.log('[' + prefix + '] creating rule routes');

    epilogue.resource({
        model: db.Rule,
        include: [db.Mosaic],
        endpoints: ['/rule', '/rule/:id']
    });

    console.log('[' + prefix + '] adding catchall 404 route');

    app.use(prefix, function (req, res, next) {
        res.sendStatus(404);
    });
};

