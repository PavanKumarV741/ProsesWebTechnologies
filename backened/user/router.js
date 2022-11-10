const express=require("express")
const router=express.Router()
const userModel=require("./schema")

// router.get("/",(req,res)=>{
//     res.send("user router")
// })

router.post("/",(req,res)=>{
    let {username,mobile,email,adress}=req.body
    userModel.create({
       username:username,
       mobile:mobile,
       email:email,
       adress:adress 
    }).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

router.get("/",async (req,res)=>{
    try{
    const data=await userModel.find({})
    res.send(data)
    }
    catch(err){
        res.send(err)
    }
})

router.put("/update",(req,res)=>{
    let {username,mobile,email,adress}=req.body
    userModel.findByIdAndUpdate({_id:req.body.id},{username:username,mobile:mobile,email:email,adress:adress}).then((data)=>{
        res.send("updated successfully")
    }).catch((err)=>{
        console.log(err)
    })
})

router.delete("/delete",(req,res)=>{
    userModel.findByIdAndRemove({_id:req.body.id}).then(()=>{
        res.send("deleted byid")
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports=router