const express = require('express');
const router = express.Router();
const passport = require('passport');
const fs = require('fs');
const {c, cpp, node, python, java} = require('compile-run');

const User = require('../models/user');
const Problem = require('../models/problem');

router.get('/getAllProblems', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    Problem.getProblems((err, problems) => {
        if(err){
            throw err;
        } else {
            res.json({problems: problems});
        }
    });
});

router.get('/getProblem/:name', passport.authenticate('jwt', {session:false}), (req, res, next) =>{
    const problemName = req.params.name;
    Problem.getProblemByName(problemName, (err, problem) => {
        if(err){
            throw err;
        } else {
            res.json({problem: problem[0]});
        }
    });
});

router.post('/add', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    let newProblem = new Problem({
        name: req.body.name,
        difficulty: req.body.difficulty,
        category: req.body.category,
        paragraph: req.body.paragraph,
        code: req.body.code,
        type: req.body.type,
        tests: req.body.tests
    });

   Problem.addProblem(newProblem, (err, problem) => {
       if(err){
           console.log(err);
           res.json({success: false, msg:'Failed to add problem'});
       } else{
           res.json({success: true, msg:'Problem added'});
       }
   });
});

router.post('/checkProblemSolution', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const user = req.user;
    const problem_name = req.body.name;
    const solution = req.body.solution;
    let now = new Date();
    let m = now.getMinutes();
    const time = now.getHours() + '.' + ((m<10)? ('0' + m): m) + '.' + now.getSeconds() + '.' + now.getMilliseconds() + '-' + now.getDate() + '.' + (now.getMonth()+1) + '.' + now.getFullYear();
    const temp_name = '#um-' + user.username + '#ts-' + (time); //um = username, ts=timestamp
    Problem.getProblemByName(problem_name, (err, problem) => {
        if(err){
            res.json({success: false, msg: 'Failed to get problem'});
        } else {
            const tests = problem[0].tests;
            // Recursive function to run all tests one after the other (waiting for previous to finish)
            function doTests(i){
                if (i === tests.length){
                    User.passedProblem(user.username, problem_name, (err, resp) => {
                        if(err) throw err;
                        else {
                            User.attemptedProblem(user.username, problem_name, (err, resp) => {
                                if(err) throw err;
                                res.json({success: true, msg: 'Solved!'});
                                if (tests.length > 0) {
                                    fs.unlink('.\\temp\\' + temp_name + '.cpp', (err) => {
                                        if (err) throw err;
                                    });
                                }
                            });
                        }
                    });
                } else {
                    fs.writeFile('.\\temp\\' + temp_name + '.cpp', tests[i].code + solution, (err) => {
                        if (err) throw err;
                        else {
                            let resultPromise = null;
                            if(tests[i].hasOwnProperty('stdin')) {
                                resultPromise = cpp.runFile('.\\temp\\' + temp_name + '.cpp', {stdin: tests[i].stdin});
                            } else {
                                resultPromise = cpp.runFile('.\\temp\\' + temp_name + '.cpp');
                            }
                            resultPromise.then(result => {
                                if (result.exitCode !== 0) {
                                    User.attemptedProblem(user.username, problem_name, (err, resp) => {
                                        if(err) throw err;
                                        if (result.errorType === 'compile-time') {
                                            res.json({success: false, msg:'Compilation Error!'});
                                        } else {
                                            res.json({success: false, msg:'Incorrect Solution!'});
                                        }
                                        fs.unlink('.\\temp\\' + temp_name + '.cpp', (err) => {
                                            if(err) throw err;
                                        });
                                    });
                                } else {
                                    doTests(i+1);
                                }
                            }).catch(err => {
                                throw err;
                            });
                        }
                    });
                }
            }
            doTests(0);
        }
    });
});

module.exports = router;
