import { Router }from 'express';
import api from './api';

const router = Router();

// defining an endpoint to return all ads
router.get('/', (req, res) => {
    res.send("Hello World!");
});

router.use('/api', api);

export default router;