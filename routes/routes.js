const express=require('express');
const router=express.Router();

const login=require('../controllers/login.controller');
const home=require('../controllers/home.controller');

router.get('/register',login.registerForm);
router.post('/register',login.registerUser);
router.get('/login',login.loginform);
router.post('/login',login.login);

router.get('/home',home.home);

module.exports=router;