var dinosaurs = require('dinosaurs')
var restify = require('restify')

var server = restify.createServer({
    name: 'dinosaurs',
    version: '1.0.0',
});

server.get('/dinosaurs', function(req, res) {
    res.json(dinosaurs)
})

server.get('/dinosaurs/:index', function(req, res) {
    var index = req.params.index

    if (index in dinosaurs) {
        res.json(dinosaurs[index])
    } else {
        res.send(400, {
            message: 'No dinosaur at index ' + index
        })
    }
})

server.listen(process.env.PORT || 8000, function() {
    console.log('%s listening at %s', server.name, server.url);
})
