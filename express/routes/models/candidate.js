const mongoose = require('mongoose')
const candidateSchema = new mongoose.Schema({
    identity:{
        id:String,
        firstname:String,
        lastname:String,
        gender:String,
        birthday:String,
        nationality:String,
        phone:Number,
        address:String,
        maritalState:String,
        registration:String
    },
    recruited:{
        state:String,
        date:String
    },
})
module.exports = mongoose.model('candidate',candidateSchema)