const router = require('express').Router();
const { Form } = require('../models');
const auth = require('../middleware/auth');

router.use(auth);

router.get('/', async (_req,res)=>{res.json(await Form.findAll());});
router.post('/', async (req,res)=>{res.json(await Form.create(req.body));});
router.get('/:id', async (req,res)=>{res.json(await Form.findByPk(req.params.id));});
router.put('/:id', async (req,res)=>{
  const f = await Form.findByPk(req.params.id);
  await f.update(req.body);
  res.json(f);
});
module.exports = router;