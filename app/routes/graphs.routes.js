module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('graphs', { title: 'MOOCs | Leire Litwin' });
});

module.exports = router;
