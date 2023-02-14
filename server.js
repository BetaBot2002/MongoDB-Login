const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const session = require('express-session');

//Importing Routes
const Routes=require('./routes/routes');

//MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/LoginTest',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db=mongoose.connection;

db.on('error',(err)=>{
    console.log(err);
})

db.once('open',()=>{
    console.log('Database Connected Succesfully!');
})

//Setting up express app
app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

//Setting Template Engine
app.set('view engine','ejs');

//Setting up Session
app.use(session({
    resave: false, // as it is set to false, now the session will not be resaved everytime a request comes even if the session is not modified at all
    saveUninitialized: false, // won't allow saving uninitialized sessions
    secret: ';kajerghpu9qeghqep98ty135ptlnrfp9q3hqerpghq5pghaero9tq3eguh',
    cookie: {
        maxAge: 1000 * 60 * 60 * 2, // 2 hours in milliseconds
        secure: false, // should not be set to true if https is not in use
    }
}));

//Setting up Routes
app.use('/',Routes);

//Setting Port and Listen
const PORT = process.env.port || 3000;

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})


