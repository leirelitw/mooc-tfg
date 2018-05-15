var University = require('../models/university.model.js');

exports.create = function(req, res) {
    // Create and Save a new University
    if(!req.body.content) {
        return res.status(400).send({message: "University can not be empty"});
    }

    var uni = new University({title: req.body.title || "Unknown University", content: req.body.content});

    uni.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the University."});
        } else {
            res.status(200).send(data);
        }
    });
};

exports.findAll = function() {
    // Retrieve and return all universities from the database.
    return University.find()
        .then((results) =>
        {
            //console.log(results));
            return results;
        });
};

exports.findByCountry = function(country) {
    // Find a single university with a universityId
    console.log(country);

    if (country == "all") {
        return University.find()
            .then((results) =>
            {
                //console.log(results));
                return results;
            });
    }
    else{
        return University.find({country: country})
            .then((results) =>
            {
                //console.log(results);
                return results;
            });
    }

};

exports.findByContinent = function(req, res) {
    // Find a single university with a universityId
    University.find({continent: req.params.continent}, function(err, uni) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "University not found by continent: " + req.params.continent});
            }
            return res.status(500).send({message: "Error retrieving university with continent: " + req.params.continent});
        }

        if(!uni) {
            return res.status(404).send({message: "University continent not found with continent: " + req.params.continent});
        }

        res.send(uni);
    });
};

exports.findOne = function(req, res) {
    // Find a single university with a universityId
    University.findById(req.params.universityId, function(err, uni) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "University not found with id " + req.params.universityId});
            }
            return res.status(500).send({message: "Error retrieving universityId with id " + req.params.universityId});
        }

        if(!uni) {
            return res.status(404).send({message: "UniversityId not found with id " + req.params.universityId});
        }

        res.send(uni);
    });
};

exports.update = function(req, res) {
    // Update a university identified by the universityId in the request
    University.findById(req.params.universityId, function(err, uni) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "UniversityId not found with id " + req.params.universityId});
            }
            return res.status(500).send({message: "Error finding university with id " + req.params.universityId});
        }

        if(!uni) {
            return res.status(404).send({message: "University not found with id " + req.params.universityId});
        }

        uni.title = req.body.title;
        uni.content = req.body.content;

        uni.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update universityId with id " + req.params.universityId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a university with the specified universityId in the request
    University.findByIdAndRemove(req.params.universityId, function(err, uni) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "University not found with id " + req.params.universityId});
            }
            return res.status(500).send({message: "Could not delete university with id " + req.params.universityId});
        }

        if(!uni) {
            return res.status(404).send({message: "University not found with id " + req.params.universityId});
        }

        res.send({message: "University deleted successfully!"})
    });
};
