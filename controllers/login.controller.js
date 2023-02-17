const User=require('../models/user.model.js');

const registerForm=(req,res,next)=>{
    res.render('pages/register',{
        title:'Register',
        message:''
    });
}

const registerUser=(req,res,next)=>{
    console.log(req.body.username)
    let userData= new User({
        username:req.body.username,
        password:req.body.password
    })

    userData.save().then(response=>{
        res.render('pages/register',{
            title:'Register',
            message:`User Added: ${req.body.username}`
        });
    }).catch(error=>{
        res.render('pages/register',{
            title:'Register',
            message:error
        });
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
    // console.log(req.body.remember)
    if(!req.session.user){
        User.find({
            username:req.body.username,
            password:req.body.password
        }).then(response=>{
            if(response.length>0){
                // if(req.body.remember=='on')
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