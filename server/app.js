import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';

// defining the Express app
const app = express();

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use(logger('combined'));
// enabling CORS for all requests
app.use(cors());

// api router
app.use('/', routes);

// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001');
});