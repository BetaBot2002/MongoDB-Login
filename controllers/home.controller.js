const User=require('../models/user.model.js');

const home=(req,res,next)=>{
    if(!req.session.user) res.redirect('/login')
    else{
        res.render('pages/home',{
            title:'home',
            username:req.session.user
        })
    }
}

module.exports={home}