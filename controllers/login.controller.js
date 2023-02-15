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

const loginform=(req,res,next)=>{
    if(req.session.user) res.redirect('/home')
    else{
        res.render('pages/loginForm',{
            title:'login'
        })
    }
}

const login=(req,res,next)=>{
    if(!req.session.user){
        User.find({
            username:req.body.username,
            password:req.body.password
        }).then(response=>{
            if(response.length>0){
                req.session.user=req.body.username
                res.redirect('/home')
            }else{
                res.redirect('/login')
            }
        })
    }else{
        res.redirect('/home')
    }

}

module.exports={registerForm,registerUser,loginform,login}