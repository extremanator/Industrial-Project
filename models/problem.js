const mongoose = require('mongoose');
const User = require('./user');

// Problem Schema
const ProblemSchema = mongoose.Schema({
    name: { //unique identifier
        type: String,
        required: true,
        unique: true
    },
    difficulty: {
        type: String,
        required: true
    },
    points: {
        type: Number,
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
    num_solved: {
        type: Number,
        required: true
    },
    num_attempted: {
        type: Number,
        required: true
    },
    solved_by: {
        type: Map
    },
    tests: {
        type: [Object], // tests have property 'code' containing the code and optional property 'stdin' with input to test
        required: true
    },
    solutions: {
        type: [String],
        required: false
    },
    solution: {
        type: String,
        required: false
    },
});

const Problem = module.exports = mongoose.model('Problem', ProblemSchema);

module.exports.getProblemById = function (id ,callback){
    Problem.findById(id, callback);
};

module.exports.getProblems = function (callback){
    Problem.find({}, callback);
};

module.exports.getLanguageProblems = function (language, callback){
    Problem.find({category: language}, callback);
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
    Problem.insertMany(problems, {ordered: false}, callback);
};

module.exports.attemptedByUser = function (problemName, username, callback){
    Problem.findOne({name: problemName}, (err, problem) => {
        if (err) throw err;
        else {
            console.log(problem);
            Problem.updateOne({name: problemName}, {num_attempted: (problem.num_attempted + 1)}, callback);
        }
    });
};

module.exports.solvedByUser = function (problemName, username, callback){
    Problem.findOne({name: problemName}, (err, problem) => {
        if (err) throw err;
        User.findOne({username: username}, (err, user) => {
            if (err) throw err;
            let new_solved_by;
            let new_num_solved = problem.num_solved;
            if(problem.solved_by !== undefined){
                new_solved_by = problem.solved_by;
            } else {
                new_solved_by = new Map();
            }
            if(!new_solved_by.has(username)) {
                new_solved_by.set(username, user.attempted_problems[problemName].num_attempts);
                new_num_solved += 1;
            }
            Problem.updateOne({name: problemName}, {solved_by: new_solved_by, num_solved: new_num_solved}, callback);
        });
    });
};
