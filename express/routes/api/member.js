const express = require('express');
const members = require('./members');
const router = express.Router();

router.use(express.json());
//Get all members
router.get('/',(req,res)=>{
    res.json(members);
});

//get one member
router.get('/:id',(req,res)=>{
    const found = members.some(members => members.id == parseInt(req.params.id))
  if(found){
        res.json(members.filter(members => members.id == parseInt(req.params.id)))
  }else{
    const id = `${req.params.id}`
    res.status(400).json({message: "Member with ID : "+id+" not found"})
  }   
});

//Get message
router.get('/:message',(req,res)=>{
  res.send(req.params.message)
})


//create a member
router.post('/',(req,res)=>{
  
try{
    const newMember = {
    id:req.body.id,
    name:req.body.name,
    email:req.body.email,
    status:"active"
  };
  if(!newMember.name || !newMember.email){
    return res.status(400).json({message:"Name and email are required !"});
  }else{
    members.push(newMember);
    // res.status(201).json("Member using ID : "+`${req.body.id}`+" added")
    res.redirect('/');
  }

}catch(error){
    res.status(400).json({message:error.message})
}
});

//update a member
router.put('/:id',(req,res)=>{
 try{
  const memberID = req.params.id
  const found = members.some(members => members.id == memberID)
    if(found > 0){
      const updateMember = req.body
      members.forEach(member => {
        if(member.id === memberID){
          member.name = updateMember.name,
          member.id = memberID,
          member.email = updateMember.email,
          member.status = updateMember.status
          res.json({message:"Member updated",member})
        }
      })
      res.status(201).json(members)
    }else{res.status(404).json({message:"Member not found"})}
  }catch(e){
    res.status(404).json({message:e.message})
  }
});

//delete Member for Members list
router.delete('/:id',(req,res)=>{
  const memberID = req.params.id
  const found = members.some(members => members.id == memberID)
  if(found > 0){
    res.status(201).json({
      message:"Member deleted",
      memberDeletedInfos:members.filter(members => members.id === memberID)
    })
  }else{res.status(404).json({message:"Member not found !"})}
})


module.exports = router