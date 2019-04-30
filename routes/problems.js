const express = require('express');
const router = express.Router();


const Problem = require('../models/problem');

router.get('/getAllProblems', (req, res, next)=>{
    Problem.getProblems((err, problems) => {
        if(err){
            throw err;
        } else {
            res.json({problems: problems});
        }
    });
});

router.get('/getProblem/:name', (req, res, next) =>{
    const problemName = req.params.name;
    Problem.getProblemByName(problemName, (err, problem) => {
        if(err){
            throw err;
        } else {
            res.json({problem: problem[0]});
        }
    });
});

router.post('/add', (req, res, next)=>{
    let newProblem = new Problem({
        name: req.body.name,
        code: req.body.code
    });

   Problem.addProblem(newProblem, (err, problem) => {
       if(err){
           res.json({success: false, msg:'failure'});
       } else{
           res.json({success: true, msg:'Problem added'});
       }
   });
});


module.exports = router;
