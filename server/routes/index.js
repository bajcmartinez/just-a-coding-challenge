import { Router }from 'express';
import api from './api';
import docs from './docs';

const router = Router();

router.get('/', (req, res) => {
    res.send("Hello World!");
});

router.use('/api', api);
router.use('/docs', docs);

export default router;