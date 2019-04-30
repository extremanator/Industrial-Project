const mongoose = require('mongoose');

// User Schema
const ProblemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

const Problem = module.exports = mongoose.model('Problem', ProblemSchema);

module.exports.getProblemById = function (id ,callback){
    Problem.findById(id, callback);
};

module.exports.getProblems = function (callback){
    Problem.find({}, callback);
};

module.exports.addProblem = function (newProblem, callback){
    newProblem.save(callback);
};

module.exports.getProblemByName = function (name, callback){
    Problem.find({name: name}, callback);
};
