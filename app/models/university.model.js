var mongoose = require('mongoose');

var UniversitySchema = mongoose.Schema({
    universityName: String,
    country: String,
    countryCode: String,
    continent: String,
    universitySize: Number,
    universitySizeValue: Number,
    shangaiRanking: Number,
    courseraMOOCS: Number,
    edXMOOCS: Number,
    totalMOOCS: Number,
    Mo2: Number,
    Mo9: Number,
    Mo10: Number,
    Ranking: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('universities', UniversitySchema);
