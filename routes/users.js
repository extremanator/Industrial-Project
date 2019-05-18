const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// Register User
router.post('/register', (req, res, next) => {
    const now = new Date();
    const m = now.getMinutes();
    const time = `${now.getHours()}:${((m<10)?(`0${m}`):m)} ${now.getDate()}/${(now.getMonth()+1)}/${now.getFullYear()}`;
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        solved_problems: {},
        num_solved: 0,
        num_attempted: 0,
        join_date: time
    });

    User.addUserIfUnique(newUser, (err, user) => {
        if(err === 'Username not unique'){
            res.json({success: false, msg: 'Username already in use'});
        } else if(err === 'Email not unique') {
            res.json({success: false, msg: 'Email already in use'});
        } else if(err){
            throw err;
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    });
});

// Authenticate User (for login)
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, { expiresIn: 604800 /* 1 week */});
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                      id: user._id,
                      name: user.name,
                      username: user.username,
                      email: user.email
                    }
                });
            } else{
                return res.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;
