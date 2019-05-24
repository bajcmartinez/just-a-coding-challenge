const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// defining the Express app
const app = express();

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use(logger('combined'));
// enabling CORS for all requests
app.use(cors());

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send("Hello World!");
});

// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001');
});