const { text } = require("express")
const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true,
        maxLength:10
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true,
        lowercase:true,
        // match:"[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
    },
    adress:{
        type:String,
        required:true
    }
    
})

const userModel=mongoose.model("user",userSchema)

module.exports=userModel