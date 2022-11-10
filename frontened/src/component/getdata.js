import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Getdata(){
    const[data,setdata]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/user").then((res)=>{
            console.log(res)
            setdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const handleupdate=(id)=>{
        axios({
          method:"put",
          url:"http://localhost:5000/user/update",
          data:{id:id}
        }).then((res)=>{
          res.status(200).send("updated")
          alert("data updated successfully")
        }).catch((err)=>{
          console.log(err)
        })
      }

    const handledelete=(id)=>{
        axios({
          method:"Delete",
          url:"http://localhost:5000/user/delete",
          data:{id:id}
        }).then((res)=>{
          alert("data deleted successfully")
          res.status(200).send("deleted")
        }).catch((err)=>{
          console.log(err)
        })
        window.location.reload()
      }


    return(
        <div className="data">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Adress</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,i)=>{
                        return  (
                        <tr key={i}>
                        <td>{item.username}</td>
                        <td>{item.mobile}</td>
                        <td>{item.email}</td>
                        <td>{item.adress}</td>
                        <Link to="/adddata"><button onClick={()=>handleupdate(item._id)}>update</button></Link>
                        <button onClick={()=>handledelete(item._id)}>delete</button>
                        </tr>
                        )
                    })}
                </tbody>
            </table>

            <Link to="/adddata">add data</Link>
            
        </div>
    )
}

export default Getdata