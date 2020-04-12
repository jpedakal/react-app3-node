const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const artist= require('./api/artist');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/',artist);

const Port = 5000;
app.listen(Port, () => {
    console.log(`serer running on port ${Port}`);
});