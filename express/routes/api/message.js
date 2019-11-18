const express = require('express');
const messages = require('./messages');
const routerMessage = express.Router();

routerMessage.use(express.json());
//Get all members
routerMessage.post('/',(req,res)=>{
    const request = {
        message:req.body.message,
        sender:"Kaasongo",
        date:"12/3/2019",
        status:true
    }
    messages.push(request)
    res.json(messages);
});
module.exports = routerMessage
