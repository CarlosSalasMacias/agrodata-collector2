const router = require('express').Router();
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register
router.post('/register', async (req,res)=>{
  const { username, password, role } = req.body;
  try{
    const user = await User.create({ username, password, role });
    res.json(user);
  }catch(err){res.status(400).json({error:err.message})}
});

// Login
router.post('/login', async (req,res)=>{
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if(!user) return res.status(404).json({error:'User not found'});
  const valid = await bcrypt.compare(password,user.password);
  if(!valid) return res.status(401).json({error:'Invalid credentials'});
  const token = jwt.sign({ id:user.id, role:user.role }, process.env.JWT_SECRET,{ expiresIn:'1d'});
  res.json({token});
});

module.exports = router;