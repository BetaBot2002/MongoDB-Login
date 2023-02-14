const User=require('../models/user.model.js');

const registerForm=(req,res,next)=>{
    res.render('pages/register',{
        title:'Register'
    });
}

const registerUser=(req,res,next)=>{
    console.log(req.body.username)
    let userData= new User({
        username:req.body.username,
        password:req.body.password
    })

    userData.save().then(response=>{
        res.json({
            message:'User Added',
            username:req.body.username
        })
    }).catch(error=>{
        res.json({
            message:error
        })
    })
}

module.exports={registerForm,registerUser}