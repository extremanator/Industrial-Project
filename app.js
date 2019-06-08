const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const fs = require('fs');

const app = express();

const port = 3000;

const users = require('./routes/users');
const problems = require('./routes/problems');
const Problem = require('./models/problem');
const User = require('./models/user');
const DBproblems = require('./config/DBproblems');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log(`Connected to database ${config.database}`);
    Problem.initialize(DBproblems, (err) => {
        if (err && err.code !== 11000){
            console.log('Failed to initialize problems DB');
        }
        console.log('Initialized problems DB');
    });
    let admin = new User({
        name: 'NaN',
        email: 'NaN',
        username: 'admin',
        password: 'admin',
        attempted_problems: {},
        num_solved: 0,
        num_attempted: 0,
        total_points: 0,
        join_date: 'The Dawn of Time!',
        isAdmin: true
    });
    User.addUserIfUnique(admin, (err, admin) => {
       if (err && (err !== 'Email not unique') && (err !== 'Username not unique')) throw err;
    });
});

mongoose.connection.on('error', (err) => {
    console.log(`Database error: ${err}`);
});

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.use('/problems', problems);

// Setting up temp folder
fs.mkdir('temp', (err) => {
     if (err && err.code !== 'EEXIST') throw err;
});


// Start Server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

