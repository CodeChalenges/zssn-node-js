var app = require('express')();

// Mapping routes
var routes = require('./lib/routes');
routes(app);

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Zombie Survival Social Network API listening at http://%s:%s", host, port);
});
