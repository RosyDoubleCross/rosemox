
models = require('./models');

models.sequelize.sync().then(function() {
    console.log('synched');
}).catch(function(err) {
    console.log('failed: ' + err);
});

