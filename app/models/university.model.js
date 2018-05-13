var mongoose = require('mongoose');

var UniversitySchema = mongoose.Schema({
    universityName: String,
    country: String,
    countryCode: String,
    continent: String,
    universitySize: Number,
    universitySizeValue: Number,
    ranking: Number,
    shangaiRanking: Number,
    courseraMOOCS: Number,
    edXMOOCS: Number,
    totalMOOCS: Number,
    Mo2: Number,
    Mo9: Number,
    Mo10: Number
},{
    _id: false
});

module.exports = mongoose.model('universities', UniversitySchema);
