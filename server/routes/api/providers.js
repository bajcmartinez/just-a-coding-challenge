import { Router }from 'express';

const router = Router();

// return a list of providers
router.get('/', function(req, res) {
    res.send("providers");
});

export default router;