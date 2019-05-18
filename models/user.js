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
    solved_problems: {
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
    join_date: {
        type: String,
        required: true
    }
}, {minimize: false});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id ,callback){
    User.findById(id, callback);
};

module.exports.getUserByUsername = function (username ,callback){
    const query = {username: username};
    User.findOne(query, callback);
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
    User.findOne({username: username}, (err, user) => {
        if (err) throw err;
        else {
            let now = new Date();
            let m = now.getMinutes();
            const time = now.getHours() + ':' + ((m<10)? ('0' + m): m) + ' ' + now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear();
            let new_solved_problems = Object.assign({}, user.solved_problems);
            if (!new_solved_problems.hasOwnProperty(problem_name)){
                new_solved_problems[problem_name] = {solved: true, dateSol: time};
                User.updateOne({username: username}, {
                    solved_problems: new_solved_problems,
                    num_solved: (user.num_solved + 1)
                }, callback);
            } else{
                callback(null, null);
            }
        }
    });
};

module.exports.attemptedProblem = function (username, problem_name, callback){
    User.findOne({username: username}, (err, user) => {
        if (err) throw err;
        else {
            User.updateOne({username: username}, {num_attempted: (user.num_attempted + 1)}, callback);
        }
    });
};


