const express=require('express');
const router=express.Router();

const login=require('../controllers/login.controller');

router.get('/register',login.registerForm);
router.post('/register',login.registerUser);

module.exports=router;