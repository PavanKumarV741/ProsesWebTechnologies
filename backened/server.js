const express=require("express")
const app=express()
const db=require("mongoose")
const usercontroller=require('./user/router')
const cors=require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors())

app.use("/user",usercontroller)

const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is runnig at port ${port}`)
})

db.connect("mongodb://localhost/crud_op",(data)=>{
    console.log("connected to db")
}),(err)=>{
    console.log(err)
}
