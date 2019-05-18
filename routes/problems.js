const express = require('express');
const router = express.Router();
const passport = require('passport');
const fs = require('fs');
const {c, cpp, node, python, java} = require('compile-run');

const User = require('../models/user');
const Problem = require('../models/problem');

router.get('/getAllProblems', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    Problem.getProblems((err, problemsArr) => {
        if(err){
            throw err;
        } else {
            res.json({problems: problemsArr});
        }
    });
});

router.get('/getProblem/:name', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const problemName = req.params.name;
    Problem.getProblemByName(problemName, (err, problemArr) => {
        if(err){
            throw err;
        } else {
            res.json({problem: problemArr[0]});
        }
    });
});

/*router.post('/add', passport.authenticate('jwt', {session:false}), (req, res, next) => {
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
});*/

router.post('/checkProblemSolution', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const user = req.user;
    const problemName = req.body.name;
    const solution = req.body.solution;
    const now = new Date();
    const m = now.getMinutes();
    const time = `${now.getHours()}.${((m<10)?(`0${m}`):m)}.${now.getSeconds()}.${now.getMilliseconds()}-${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`;
    const tempName = `#um-${user.username}#ts-${time}`; //um = username, ts=timestamp
    Problem.getProblemByName(problemName, (err, problemArr) => {
        if(err){
            res.json({success: false, msg: 'Failed to get problem'});
        } else {
            const tests = problemArr[0].tests;
            // Recursive function to run all tests one after the other (waiting for previous to finish)
            function doTests(i){
                if (i === tests.length){ //If we passed all tests
                    User.passedProblem(user.username, problemName, (err, resp) => {
                        if(err) throw err;
                        else {
                            User.attemptedProblem(user.username, problemName, (err, resp) => {
                                if(err) throw err;
                                res.json({success: true, msg: 'Solved!'});
                                if (tests.length > 0) {
                                    fs.unlink(`.\\temp\\${tempName}.cpp`, (err) => {
                                        if (err) throw err;
                                    });
                                }
                            });
                        }
                    });
                } else {
                    const concatenatedCode = tests[i].code + solution;
                    fs.writeFile(`.\\temp\\${tempName}.cpp`, concatenatedCode , (err) => {
                        if (err) throw err;
                        else {
                            let resultPromise = null;
                            if(tests[i].hasOwnProperty('stdin')) {
                                resultPromise = cpp.runFile(`.\\temp\\${tempName}.cpp`, {stdin: tests[i].stdin});
                            } else {
                                resultPromise = cpp.runFile(`.\\temp\\${tempName}.cpp`);
                            }
                            resultPromise.then((result) => {
                                if (result.exitCode !== 0) {
                                    User.attemptedProblem(user.username, problemName, (err, resp) => {
                                        if(err) throw err;
                                        if (result.errorType === 'compile-time') {
                                            res.json({success: false, msg:'Compilation Error!'});
                                        } else {
                                            res.json({success: false, msg:'Incorrect Solution!'});
                                        }
                                        fs.unlink(`.\\temp\\${tempName}.cpp`, (err) => {
                                            if(err) throw err;
                                        });
                                    });
                                } else {
                                    doTests(i+1);
                                }
                            }).catch((err) => {
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
