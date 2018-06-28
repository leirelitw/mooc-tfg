var express = require('express');
var bodyParser = require('body-parser');

// create express app
var app = express();
var path = require('path');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

//Require the routes
var index = require('./app/routes/home.routes.js');
var data = require('./app/routes/data.routes.js');
var data2 = require('./app/routes/data2.routes.js');
var data9 = require('./app/routes/data9.routes.js');
var about = require('./app/routes/about.routes.js');
var worldmap = require('./app/routes/worldmap.routes.js');
var comparison = require('./app/routes/comparison.routes.js');
var lineargraphs = require('./app/routes/linear.routes.js');
var barchart = require('./app/routes/barchart.routes.js');
var mapsAsia = require('./app/routes/mapsAsia.routes.js');
var mapsAfrica = require('./app/routes/mapsAfrica.routes.js');
var mapsOceania = require('./app/routes/mapsOceania.routes.js');
var mapsEurope = require('./app/routes/mapsEurope.routes.js');
var mapsAmerica = require('./app/routes/mapsAmerica.routes.js');


// Require Universities routes
require('./app/routes/university.routes.js')(app);

//app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/index', index);
app.use('/about', about);
app.use('/worldmap', worldmap);
app.use('/comparison', comparison);
app.use('/lineargraphs', lineargraphs);
app.use('/barchart', barchart);
app.use('/data', data);
app.use('/data2', data2);
app.use('/data9', data9);
app.use('/mapsAsia', mapsAsia);
app.use('/mapsAfrica', mapsAfrica);
app.use('/mapsOceania', mapsOceania);
app.use('/mapsEurope', mapsEurope);
app.use('/mapsAmerica', mapsAmerica);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res, next) {
    res.redirect('/index');
});

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

// define a simple route
/*
app.get('/', function(req, res){
    res.json({"message": "Welcome to MOOC application."});
    //require('./app/routes/home.routes.js')(app);
});
*/

// listen for requests

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is listening on port 3000");
});
