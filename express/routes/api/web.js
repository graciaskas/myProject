 const express =  require("express")
 const app = express.Router()
 const candidates = require('../models/candidate');
 const MembersList = require('../api/members');
 //home page
 app.get('/', function (req, res) {
    res.render('home',{
        title:"Members List",
        members:MembersList,
        main:"main"
    });
});



//dashboad
app.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})

  //recrutement
  app.get('/recrutement',async(req,res)=>{
    try{
        let candidateList = await candidates.find()
        res.render('recrutement',{
            title:"Recrutement",
            candidate:candidateList
        })
    }catch(e){
       res.status(500).json({
          message:e.message
       })
    }
   
})

//settings
app.get("/settings",(req,res)=>{
    res.status(200).render('settings',{title:"Settings"})
})

module.exports = app