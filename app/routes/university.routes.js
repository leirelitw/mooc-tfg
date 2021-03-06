module.exports = function(app) {

    var universities = require('../controllers/university.controller.js');

    // Create a new uni
    app.post('/universities', universities.create);

    // Retrieve all universities
    app.get('/universities', universities.findAll);

    // Retrieve all universities by country
    app.post('/universities/countries/:country', function(req, res, next) {
        universities.findByCountry(req.params.country).then( function(dataRetrieved){
            res.status(200).json(dataRetrieved);
        });
    });

    // Retrieve all universities by continent
    app.post('/universities/continents/:continent', function(req, res, next) {
        universities.findByContinent(req.params.continent).then( function(dataRetrieved){
            res.status(200).json(dataRetrieved);
        });
    });

    // Retrieve all universities count by country
    app.post('/universities/countriesCount/:country', function(req, res, next) {
      universities.findCountByCountry(req.params.country).then( function(dataRetrieved){
            res.status(200).json(dataRetrieved);
        });
    });

    // Retrieve all universities count by continent
    app.post('/universities/continentsCount/:continent', function(req, res, next) {
        universities.findCountByContinent(req.params.continent).then( function(dataRetrieved){
            res.status(200).json(dataRetrieved);
        });
    });


    // Retrieve a single university with universityId
    app.get('/universities/:universityName', universities.findOne);

    // Update a university with universityId
    app.put('/universities/:universityId', universities.update);

    // Delete a university with universityId
    app.delete('/universities/:universityId', universities.delete);
}
