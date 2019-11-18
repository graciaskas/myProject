
const express = require('express');
const path    = require('path');
const members = require('./routes/api/member')
const moment = require('moment');
const parser = require('body-parser');
const application = require('./routes/app')
const message = require('./routes/api/message')
const ejs =  require("ejs")
const candidate = require('./routes/app')
const web       = require('./routes/api/web')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/candidate',{useNewUrlParser:true})
const db = mongoose.connection
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log('connected to db'))

    const app = express();
   

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use('/messages',message)
    app.use('/candidate',candidate)
    app.use('/members',members);
    app.use('/web',web);

    //ejs middleware
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');

    //main page for loading
    app.get("/",(req,res)=>{
        res.render('index',{
            title:"404 Not found"
        })
    })

  

    //bodyParser
    app.use(express.static(path.join(__dirname,"public")))
    app.use(function(req,res){
        res.render('not_found')
    })



    const PORT = process.env.PORT || 90;
    app.listen(PORT,()=> console.log(`server on port ${PORT}`));

