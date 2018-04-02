module.exports = function(app) {

    var universities = require('../controllers/university.controller.js');

    // Create a new Note
    app.post('/universities', universities.create);

    // Retrieve all Notes
    app.get('/universities', universities.findAll);

    // Retrieve a single Note with noteId
    app.get('/universities/:universityId', universities.findOne);

    // Update a Note with noteId
    app.put('/universities/:universityId', universities.update);

    // Delete a Note with noteId
    app.delete('/universities/:universityId', universities.delete);
}
