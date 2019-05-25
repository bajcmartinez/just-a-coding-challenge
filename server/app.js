import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';

// Determine whether we are running in a lambda environment
const isInLambda = !!process.env.LAMBDA_TASK_ROOT;

// defining the Express app
const app = express();

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('combined'));
// enabling CORS for all requests
app.use(cors());

// api router
app.use('/', routes);

// starting the server
if (isInLambda) {
    const serverlessExpress = require('aws-serverless-express');
    const server = serverlessExpress.createServer(app);
    exports.main = (event, context) => serverlessExpress.proxy(server, event, context)
} else {
    app.listen(3001, () => {
        console.log('listening on port 3001');
    });
}