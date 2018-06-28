module.exports = router;

var express = require('express');
var router = express.Router();
var universities = require('../controllers/university.controller.js');

/* GET home page. */

router.get('/', function(req, res, next) {
  universities.findAll().then( function(dataRetrieved){
    //console.log(dataRetrieved);
    res.render('mapsAfrica', { title: 'MOOCs Ranking | Leire Litwin',
    data: dataRetrieved
    });
  }, function (reason) {
    console.log("argh"+reason);
  });
});


module.exports = router;
