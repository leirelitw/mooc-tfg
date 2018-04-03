module.exports = function(app) {

    var universities = require('../controllers/university.controller.js');

    // Create a new uni
    app.post('/universities', universities.create);

    // Retrieve all universities
    app.get('/universities', universities.findAll);

    // Retrieve a single university with universityId
    app.get('/universities/:universityId', universities.findOne);

    // Update a university with universityId
    app.put('/universities/:universityId', universities.update);

    // Delete a university with universityId
    app.delete('/universities/:universityId', universities.delete);
}
