var mongoose = require('mongoose');

var UniversitySchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('universities', UniversitySchema);
