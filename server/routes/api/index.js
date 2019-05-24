import { Router } from 'express';
import providers from './providers';

const api = Router();

// providers endpoint
api.use('/providers', providers);

// Just a hello world from the API endpoint
api.get('/', (req, res) => {
    res.send("Hello World from API!");
});

export default api;