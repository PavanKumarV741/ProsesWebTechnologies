import {useState,useEffect} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Form(){
    const[data,setdata]=useState({username:"",mobile:"",email:"",adress:""})
    const navigate=useNavigate()


    useEffect(()=>{
        axios.get("http://localhost:5000/user").then((res)=>{
            console.log(res)
            setnewdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const handlechange=(e,id)=>{
        setdata({...data,[id]:e.target.value})
        console.log(data)
    }

    const handlesubmit=(e)=>{    
        e.preventDefault()
        axios.post("http://localhost:5000/user",data).then((res)=>{
            console.log("added successfully")
            navigate("/getdata")
        }).catch((err)=>{
            console.log(err)
        })
    }


    return(
    <div className="addcontacts">
        <h2>Add userdata here</h2>
        <form>
        <input type="text" name="username" placeholder="name" onChange={(e)=>handlechange(e,"username")} />
        <br/>
        <input type="phonenumber" name="mobile" placeholder="mobile" onChange={(e)=>handlechange(e,"mobile")} />
        <br/>
        <input type="text" name="email" placeholder="email" onChange={(e)=>handlechange(e,"email")} />
        <br/>
        <input type="text" name="adress" placeholder="adress" onChange={(e)=>handlechange(e,"adress")}/>
        
        </form>
        <div className="addcontactbutton">
        <button onClick={(e)=>handlesubmit(e)}>Add data</button>
        </div>
    </div>
    )
}
export default Form