// Controllers
var usersController       = require('./controllers/users_controller');
var inventoriesController = require('./controllers/inventories_controller');
var reportsController     = require('./controllers/reports_controller');

module.exports = function(app) {
  // User creation route
  app.post('/users', function(req, res) {
    usersController.create(req.body, function(results) {
      res.json(results);
    });
  });

  // Update user location
  app.put('/users/:user_id/location', function(req, res) {
    usersController.updateLocation(req.params.user_id, req.body, function(results) {
      res.json(results);
    });
  });

  // Mark user as infected
  app.put('/users/:user_id/mark_as_infected', function(req, res) {
    usersController.markAsInfected(req.params.user_id, req.params.infected_id, function(results) {
      res.json(results);
    });
  });

  /*
    User inventory routes
  */
  app.put('/users/:user_id/inventory', function(req, res) {
    inventoriesController.add(req.params.user_id, req.body, function(results) {
      res.json(results);
    });
  });

  app.delete('/users/:user_id/inventory/:item_id', function(req, res) {
    inventoriesController.remove(req.params.user_id, req.params.item_id, function(results) {
      res.json(results);
    });
  });

  // Reports
  app.get('/reports/percentage_of_infected', function(req, res) {
    reportsController.percentageOfInfected(function(results) {
      res.json(results);
    });
  });

  app.get('/reports/percentage_of_not_infected', function(req, res) {
    reportsController.percentageOfNotInfected(function(results) {
      res.json(results);
    });
  });

  app.get('/reports/average_itens_per_user', function(req, res) {
    reportsController.averageItensPerUser(function(results) {
      res.json(results);
    });
  });

  app.get('/reports/points_lost_by_infection', function(req, res) {
    reportsController.pointsLostByInfection(function(results) {
      res.json(results);
    });
  });
}
