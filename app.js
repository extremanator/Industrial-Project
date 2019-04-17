const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();

const port = 3000;

const users = require('./routes/users');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database '+config.database);
});

mongoose.connection.on('error', (err)=>{
    console.log('Database error: '+err);
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

// Start Server
app.listen(port, ()=>{
   console.log('Server started on port '+port);
});

// Index Route
app.get('/', (req, res)=>{
    res.send('Invalid Endpoint');
});

app.get('*', function(req, res) {
    res.redirect('/');
});
