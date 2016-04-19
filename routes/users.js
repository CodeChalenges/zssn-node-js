var express = require('express');
var router = express.Router();

// Controllers
var usersController       = require('../controllers/users_controller');
var inventoriesController = require('../controllers/inventories_controller');

// User creation route
router.post('/', function(req, res) {
  usersController.create(req.body, function(results) {
    res.json(results);
  });
});

// Update user location
router.put('/:user_id/location', function(req, res) {
  usersController.updateLocation(req.params.user_id, req.body, function(results) {
    res.json(results);
  });
});

// Mark user as infected
router.put('/:user_id/mark_as_infected', function(req, res) {
  usersController.markAsInfected(req.params.user_id, req.params.infected_id, function(results) {
    res.json(results);
  });
});

/*
  User inventory routes
*/
router.put('/:user_id/inventory', function(req, res) {
  inventoriesController.addToUserInventory(req.params.user_id, req.body, function(results) {
    res.json(results);
  });
});

router.delete('/:user_id/inventory/:item_type', function(req, res) {
  inventoriesController.removeFromUserInventory(req.params.user_id, req.params.item_type, function(results) {
    res.json(results);
  });
});

module.exports = router;
