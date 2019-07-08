const express = require('express');
const router = express.Router();
const passport = require('passport');
const fs = require('fs');
const fsa = require('fs-extra');
const { exec } = require('child_process');

const User = require('../models/user');
const Problem = require('../models/problem');

// This is the absolute path written in unix format for the docker command (setting the working directory of the docker)
const absolutePath = '/c/Users/dan/Documents/Rafael-Project';

router.get('/getAllProblems', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    Problem.getProblems((err, problemsArr) => {
        if(err){
            throw err;
        } else {
            res.json({problems: problemsArr});
        }
    });
});

router.get('/getLanguageProblems/:language', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const language = req.params.language;
    Problem.getLanguageProblems(language, (err, problemsArr) => {
        if(err){
            throw err;
        } else {
            res.json({problems: problemsArr});
        }
    });
});

router.get('/getProblem/:name', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const problemName = req.params.name;
    Problem.getProblemByName(problemName, (err, problem) => {
        if(err){
            throw err;
        } else {
            res.json({problem: problem});
        }
    });
});

router.post('/addClosedProblem', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    if (req.user.isAdmin) {
        const problemInfo = {
            name: req.body.name,
            difficulty: req.body.difficulty,
            points: req.body.points,
            category: req.body.category,
            paragraph: req.body.paragraph,
            type: req.body.type,
            num_solved: 0,
            num_attempted: 0,
            solutions: req.body.solutions,
            solution: req.body.solution
        };
        // code is optional for closed problems
        if (req.body.code !== undefined){
            problemInfo.code = req.body.code;
        }
        let newProblem = new Problem(problemInfo);

        Problem.addProblem(newProblem, (err, problem) => {
            if (err) {
                if (err.code === 11000) {
                    res.json({success: false, msg: 'Failed to add problem. A problem with that name already exists.'})
                } else {
                    res.json({success: false, msg: `Failed to add problem. Error name: ${err.name}`});
                }
            } else {
                res.json({success: true, msg: 'Problem added'});
            }
        });
    }
});

router.post('/removeProblem', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const problemName = req.body.name;
    Problem.getProblemByName(problemName, (err, problem) => {
        if (err) throw err;
        if (problem === null){
            res.json({success: false, msg: 'Problem doesn\'t exist.'});
        } else {
            Problem.removeProblem(problemName, (err, data) => {
                if (err) throw err;
                if (problem.solved_by !== undefined) {
                    const solving_users = Array.from(problem.solved_by.keys());

                    function removeAux(i) {
                        if (i === solving_users.length) {
                            res.json({success: true, msg: `Removed ${problemName}`});
                        } else {
                            User.removeProblemForUser(solving_users[i], problem, (err, user) => {
                                if (err) throw err;
                                removeAux(i + 1);
                            });
                        }
                    }

                    removeAux(0);
                } else {
                    res.json({success: true, msg: `Removed ${problemName}`});
                }
            });
        }
    });
});

router.post('/checkProblemSolution', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    checkSolution(req, res, next, true);
});

router.post('/checkTestSolution', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    checkSolution(req, res, next, false);
});

router.post('/checkClosedProblemSolution', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const problemName = req.body.name;
    const user = req.user;
    Problem.getProblemByName(problemName, (err, problem) => {
        if(err) throw err;
        User.attemptedProblem(user.username, problemName, (err, resp) => {
            if (err) throw err;
            Problem.attemptedByUser(problemName, user.username, (err, resp) => {
                if (err) throw err;
                if(req.body.solution === problem.solution) {
                    User.passedProblem(user.username, problemName, (err, resp) => {
                        if (err) throw err;
                        Problem.solvedByUser(problemName, user.username, (err, resp) => {
                            if (err) throw err;
                            res.json({success: true, msg: 'Correct!'});
                        });
                    });
                } else {
                    res.json({success: false, msg: 'Incorrect!'})
                }
            });
        });
    });
});

router.post('/checkClosedTestSolution', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const problemName = req.body.name;
    const user = req.user;
    Problem.getProblemByName(problemName, (err, problem) => {
        if(err) throw err;
        if(req.body.solution === problem.solution) {
            res.json({success: true, msg: 'Correct!'});
        } else {
            res.json({success: false, msg: 'Incorrect!'});
        }
    });
});

function checkSolution(req, res, next, updateCounters){
    const user = req.user;
    const problemName = req.body.name;
    const solution = req.body.solution;
    const now = new Date();
    const m = now.getMinutes();
    const time = `${now.getHours()}.${((m<10)?(`0${m}`):m)}.${now.getSeconds()}.${now.getMilliseconds()}-${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`;
    const tempName = `um-${user.username}_ts-${time}`; //um = username, ts=timestamp
    Problem.getProblemByName(problemName, (err, problem) => {
        if(err){
            res.json({success: false, msg: 'Failed to get problem'});
        } else {
            // making user specific directory that will be the root of the docker image
            fs.mkdir(`.\\temp\\${tempName}`, (err) => {
                if (err) throw err;
                // creating copy of compiling and running script for the docker image
                fs.copyFile(`.\\compile-run.py`, `.\\temp\\${tempName}\\compile-run.py`, (err) => {
                    if (err) throw err;
                    fs.copyFile(`.\\compile-run-withinput.py`, `.\\temp\\${tempName}\\compile-run-withinput.py`, (err) => {
                        if (err) throw err;
                        const tests = problem.tests;

                        // Recursive function to run all tests one after the other (waiting for previous to finish)
                        function doTests(i) {
                            if (i === tests.length) { //If we passed all tests
                                if (updateCounters) {
                                    User.attemptedProblem(user.username, problemName, (err, resp) => {
                                        if (err) throw err;
                                        Problem.attemptedByUser(problemName, user.username, (err, resp) => {
                                            if (err) throw err;
                                            User.passedProblem(user.username, problemName, (err, resp) => {
                                                if (err) throw err;
                                                Problem.solvedByUser(problemName, user.username, (err, resp) => {
                                                    if (err) throw err;
                                                    res.json({success: true, msg: 'Solved!'});
                                                });
                                            });
                                        });
                                    });
                                } else {
                                    res.json({success: true, msg: 'Solved!'});
                                }
                                fsa.remove(`.\\temp\\${tempName}`, (err) => {
                                    if (err) throw err;
                                });
                            } else {
                                const concatenatedCode = tests[i].code + solution;
                                fs.writeFile(`.\\temp\\${tempName}\\test.cpp`, concatenatedCode, (err) => {
                                    if (err) throw err;
                                    if (tests[i].hasOwnProperty('stdin')) {
                                        fs.writeFile(`.\\temp\\${tempName}\\input.txt`, tests[i].stdin, (err) => {
                                            if (err) throw err;
                                            exec(`docker run --name ${tempName} --rm -v ${absolutePath}/temp/${tempName}:/workdir ubuntu:project python3.7 /workdir/compile-run-withinput.py`, {timeout: 5000}, dockerCallback);
                                        });
                                    } else {
                                        exec(`docker run --name ${tempName} --rm -v ${absolutePath}/temp/${tempName}:/workdir ubuntu:project python3.7 /workdir/compile-run.py`, {timeout: 5000}, dockerCallback);
                                    }

                                    function dockerCallback(err, stdout, stderr) {
                                        // we get an error message when we shut down docker image due to timeout
                                        if (err) {
                                            // remove the docker image
                                            exec(`docker rm -f ${tempName}`, (err, stdout, stderr) => {
                                                if (err) console.log(err);
                                                if (updateCounters) {
                                                    User.attemptedProblem(user.username, problemName, (err, resp) => {
                                                        if (err) throw err;
                                                        Problem.attemptedByUser(problemName, user.username, (err, resp) => {
                                                            if (err) throw err;
                                                            res.json({success: false, msg: 'Incorrect Solution!'});
                                                        });
                                                    });
                                                } else {
                                                    res.json({success: false, msg: 'Incorrect Solution!'});
                                                }
                                                fsa.remove(`.\\temp\\${tempName}`, (err) => {
                                                    if (err) throw err;
                                                });
                                            });
                                        } else {
                                            // on success of test python script prints 0 to stdout
                                            if (stdout === '0') {
                                                doTests(i + 1);
                                            } else { // otherwise compilation error or incorrect solution
                                                if (updateCounters) {
                                                    User.attemptedProblem(user.username, problemName, (err, resp) => {
                                                        if (err) throw err;
                                                        Problem.attemptedByUser(problemName, user.username, (err, resp) => {
                                                            if (err) throw err;
                                                            if (stdout === '1' || stdout === '-11') {
                                                                res.json({success: false, msg: 'Incorrect Solution!'});
                                                            } else {
                                                                res.json({success: false, msg: 'Compilation Error!'});
                                                            }
                                                        });
                                                    });
                                                } else {
                                                    if (stdout === '1' || stdout === '-11') {
                                                        res.json({success: false, msg: 'Incorrect Solution!'});
                                                    } else {
                                                        res.json({success: false, msg: 'Compilation Error!'});
                                                    }
                                                }
                                                fsa.remove(`.\\temp\\${tempName}`, (err) => {
                                                    if (err) throw err;
                                                });
                                            }
                                        }
                                    }
                                });
                            }
                        }

                        doTests(0);
                    });
                });
            });
        }
    });
}



module.exports = router;
