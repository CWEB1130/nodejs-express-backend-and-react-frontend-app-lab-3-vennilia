var express = require('express');
var router = express.Router();
//makes the offers.JSON file available in this file
var offers = require('../offers.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(offers);
});

module.exports = router;
