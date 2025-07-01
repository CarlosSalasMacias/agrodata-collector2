const router = require('express').Router();
const { Submission } = require('../models');
const auth = require('../middleware/auth');

router.use(auth);

router.get('/', async (_req,res)=>{res.json(await Submission.findAll());});
router.post('/', async (req,res)=>{res.json(await Submission.create(req.body));});
module.exports = router;