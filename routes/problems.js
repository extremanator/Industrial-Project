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
    const tempName = `#um-${user.username}#ts-${time}`; //um = username, ts=timestamp
    Problem.getProblemByName(problemName, (err, problem) => {
        if(err){
            res.json({success: false, msg: 'Failed to get problem'});
        } else {
            const tests = problem.tests;
            // Recursive function to run all tests one after the other (waiting for previous to finish)
            function doTests(i){
                if (i === tests.length){ //If we passed all tests
                    if(updateCounters) {
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
                    if (tests.length > 0) {
                        fs.unlink(`.\\temp\\${tempName}.cpp`, (err) => {
                            if (err) throw err;
                        });
                    }
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
                                    if(updateCounters) {
                                        User.attemptedProblem(user.username, problemName, (err, resp) => {
                                            if (err) throw err;
                                            Problem.attemptedByUser(problemName, user.username, (err, resp) => {
                                                if (err) throw err;
                                                if (result.errorType === 'compile-time') {
                                                    res.json({success: false, msg: 'Compilation Error!'});
                                                } else {
                                                    res.json({success: false, msg: 'Incorrect Solution!'});
                                                }
                                            });
                                        });
                                    } else{
                                        if (result.errorType === 'compile-time') {
                                            res.json({success: false, msg: 'Compilation Error!'});
                                        } else {
                                            res.json({success: false, msg: 'Incorrect Solution!'});
                                        }
                                    }
                                    fs.unlink(`.\\temp\\${tempName}.cpp`, (err) => {
                                        if (err) throw err;
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
}



module.exports = router;
