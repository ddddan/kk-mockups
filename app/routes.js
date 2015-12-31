var path = require('path');
var KKItem = require('./models/kkitem');

module.exports = function (app) {
    app.get('/api/kkitems', function (req, res) {
        KKItem.find(function (err, items) {
            if (err) {
                res.send(err);
            }
            res.json(items);
        });
    });

    app.get('/*', function(req, res) {
       res.sendFile(path.join(__dirname, '../public/views/index.html'));
    });
};
