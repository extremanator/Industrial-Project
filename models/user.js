const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: { // unique identifier
        type: String,
        required: true
    },
    username: { // unique identifier
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    attempted_problems: {
        type: Object
    },
    num_solved: {
        type: Number,
        required: true
    },
    num_attempted: {
        type: Number,
        required: true
    },
    total_points: {
        type: Number,
        required: true
    },
    join_date: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
}, {minimize: false});

const User = module.exports = mongoose.model('User', UserSchema);
const Problem = require('./problem');

module.exports.getUserById = function (id ,callback){
    User.findById(id, callback);
};

module.exports.getUserByUsername = function (username ,callback){
    const query = {username: username};
    User.findOne(query, callback);
};

module.exports.getUsers = function (callback){
    User.find({}, callback);
};

module.exports.addUserIfUnique = function (newUser, callback){
    User.findOne({username: newUser.username}, (err, user1) => {
        if (err) throw err;
        if(!user1){
            User.findOne({email: newUser.email}, (err, user2) => {
               if (err) throw err;
               if(!user2){
                   bcrypt.genSalt(10, (err,salt) => {
                       bcrypt.hash(newUser.password, salt, (err,hash) => {
                           if(err) throw err;
                           newUser.password = hash;
                           newUser.save(callback);
                       });
                   });
               } else {
                   callback('Email not unique', null);
               }
            });
        } else {
            callback('Username not unique', null);
        }
    });
};

module.exports.comparePassword = function (candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
};

module.exports.passedProblem = function (username, problem_name, callback){
    Problem.getProblemByName(problem_name, (err, problem) => {
        if (err) throw err;
        User.findOne({username: username}, (err, user) => {
            if (err) throw err;
            let now = new Date();
            let m = now.getMinutes();
            const time = now.getHours() + ':' + ((m<10)? ('0' + m): m) + ' ' + now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear();
            let new_attempted_problems = Object.assign({}, user.attempted_problems);
            if (!new_attempted_problems[problem_name].solved) {
                new_attempted_problems[problem_name].solved = true;
                new_attempted_problems[problem_name].dateSol = time;
                User.updateOne({username: username}, {
                    total_points: (user.total_points + problem.points),
                    attempted_problems: new_attempted_problems,
                    num_solved: (user.num_solved + 1)
                }, callback);
            } else{
                callback(null, user);
            }
        });
    });

};

module.exports.attemptedProblem = function (username, problem_name, callback){
    User.findOne({username: username}, (err, user) => {
        if (err) throw err;
        else {
            let new_attempted_problems = Object.assign({}, user.attempted_problems);
            if(new_attempted_problems.hasOwnProperty(problem_name)) {
                if(!new_attempted_problems[problem_name].solved){
                    new_attempted_problems[problem_name].num_attempts += 1;
                }
            } else {
                new_attempted_problems[problem_name] = {solved: false, dateSol: 'TBD', num_attempts: 1};
            }
            User.updateOne({username: username}, {attempted_problems: new_attempted_problems, num_attempted: (user.num_attempted + 1)}, callback);
        }
    });
};

module.exports.didUserSolveProblem = function (username, problem_name, callback){
    User.findOne({username: username}, (err, user) => {
        if(user.solved_problems.hasOwnProperty(problem_name)) {
            callback(err, true);
        } else{
            callback(err, false);
        }
    });
};

module.exports.getNumUsers = function(callback){
    User.count(callback);
};

module.exports.searchForUsers = function(username, callback){
    const num_search_results = 4;
    User.find({username: {$regex: username, $options: 'i'}}, null, {limit: num_search_results}, callback);
};

module.exports.removeProblemForUser = function(username, problem, callback){
    User.findOne({username: username}, (err, user) => {
        if (err) throw err;
        let new_attempted_problems = Object.assign({}, user.attempted_problems);
        let new_num_solved = user.num_solved;
        let new_total_points = user.total_points;
        if (new_attempted_problems[problem.name] !== undefined) {
            if(new_attempted_problems[problem.name].solved){
                new_total_points -= problem.points;
                new_num_solved--;
            }
            delete new_attempted_problems[problem.name];
        }
        User.updateOne({username: username}, {attempted_problems: new_attempted_problems, num_solved: new_num_solved, total_points: new_total_points}, callback);
    });
};

module.exports.removeUser = function (username, callback){
    User.deleteOne({username: username}, callback);
};
