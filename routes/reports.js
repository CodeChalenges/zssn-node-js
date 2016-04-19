var express = require('express');
var router = express.Router();

var reportsController = require('../controllers/reports_controller');

// Reports
router.get('/percentage_of_infected', function(req, res) {
  reportsController.percentageOfInfected(function(results) {
    res.json(results);
  });
});

router.get('/percentage_of_not_infected', function(req, res) {
  reportsController.percentageOfNotInfected(function(results) {
    res.json(results);
  });
});

router.get('/average_itens_per_user', function(req, res) {
  reportsController.averageItensPerUser(function(results) {
    res.json(results);
  });
});

router.get('/points_lost_by_infection', function(req, res) {
  reportsController.pointsLostByInfection(function(results) {
    res.json(results);
  });
});

module.exports = router;
