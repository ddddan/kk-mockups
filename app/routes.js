var path = require('path');
var Nerd = require('./models/nerd');

module.exports = function (app) {
    app.get('/api/nerds', function (req, res) {
        Nerd.find(function (err, nerds) {
            if (err) {
                res.send(err);
            }
            res.json(nerds);
        });
    });

    app.get('/img_test', function(req, res) {
       res.sendFile(path.join(__dirname, '../public/views/img_test.html'));
    });

    app.get('/', function(req, res) {
       res.sendFile(path.join(__dirname, '../public/views/index.html'));
    });
};
