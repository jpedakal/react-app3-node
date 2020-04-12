const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const artist = require('./api/artist');
const get_artist = require('./api/get_artist');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

// routes
app.use('/', artist);
app.use('/', get_artist);

const Port = 5000;
app.listen(Port, () => {
    console.log(`serer running on port ${Port}`);
});