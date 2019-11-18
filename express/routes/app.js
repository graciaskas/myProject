const express = require("express")
const app = express.Router()
const candidates = require('./models/candidate');


//get all candidate
app.get("/api/list",async function(req,res){
  try{
      let candidateList = await candidates.find()
      res.json(candidateList)
  }catch(e){
     res.status(500).json({
        message:e.message
     })
  }
})

//add new candidate
app.post("/push",async(req,res,next)=>{
   let candidateList = await candidates.find()

   //handle date
   let date = new Date()
   let day = ("0" + date.getDate()).slice(-2);
   let month = ("0" + (date.getMonth() + 1)).slice(-2);
   let year = date.getFullYear()
   const curentdate = day+"-"+month+"-"+year;
  
   //Give Cin to candidate
   const getRandomValue = function(){
     
      let rollnumber = year+""+Math.floor((Math.random() * 1000) + 1)+""+month;
      candidateList.forEach(candidate =>{
         if(candidate.identity.id === rollnumber){
            rollnumber = rollnumber+1 
         }
      })
      return rollnumber
   }
   const newCandidate = new candidates({
      identity:{
         id:getRandomValue(),
         firstname:req.body.first,
         lastname:req.body.last,
         gender:req.body.gender,
         birthday:req.body.birthday,
         nationality:req.body.nationality,
         phone:req.body.phone,
         address:req.body.address,
         maritalState:req.body.maritalState,
         registration:curentdate
      },
      recruited:{
         state:"false",
         date:""
      }
   })
   try{
      const saved = newCandidate.save()
      // let candidateList = await candidates.find()
      res.redirect("/web/recrutement")
   }catch(e){
      res.json({message:e.message})
   }
})

//clear candidate list
app.post('/clearList',async(req,res)=>{
   let candidateList = await candidates.find()
   candidateList.forEach(candidate =>{
      candidate.remove()
   })
   setTimeout(()=>{
      res.redirect("/web/recrutement")
   },1000)
})

//add candidate to a personal
app.post("/push/personal/",async(req,res)=>{
   let candidate_infos = req.body
   let list = await candidates.find()
   //search candidate
   try{
      list.forEach(candidate =>{
         if(candidate.identity.id == candidate_infos.id){
            if(candidate.identity.firstname === candidate_infos.first){
               //give access to set personal infos
               res.redirect("/web/recrutement?access=okay")
            }else{
               res.redirect("/web/recrutement?access=denied")
            }
         }else{res.redirect("/web/recrutement?access=denied")}
      })
   }catch(e){
      res.status(500).json({
         message:e.message
      })
   }
  
})
module.exports = app