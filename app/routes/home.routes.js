module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MOOCs Ranking | Leire Litwin' });
});

module.exports = router;
