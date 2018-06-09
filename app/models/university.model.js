var mongoose = require('mongoose');

var UniversitySchema = mongoose.Schema({
    universityName: String,
    country: String,
    countryCode: String,
    continent: String,
    universitySize: { type: Number, min: 0 },
    universitySizeValue: { type: Number, min: 0, max: 5 },
    ranking: { type: Number, min: 1 },
    shangaiRanking: { type: Number, min: 1 },
    courseraMOOCS: { type: Number, min: 0 },
    edXMOOCS: { type: Number, min: 0 },
    totalMOOCS: { type: Number, min: 0 },
    Mo2: Number,
    ranking2: { type: Number, min: 1 },
    Mo9: Number,
    ranking9: { type: Number, min: 1 },
    Mo10: Number,
    ranking10: { type: Number, min: 1 }
},{
    _id: false
});

module.exports = mongoose.model('universities', UniversitySchema);
