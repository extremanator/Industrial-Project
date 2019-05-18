const mongoose = require('mongoose');

// User Schema
const ProblemSchema = mongoose.Schema({
    name: { //unique identifier
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    paragraph: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    tests: {
        type: [Object], // tests have property 'code' containing the code and optional property 'stdin' with input to test
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

module.exports.clear = function (callback){
    Problem.deleteMany({}, callback);
};

module.exports.initialize = function (problems, callback){
    Problem.insertMany(problems, callback);
};
