import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h2>home page</h2>
            <div>
            <Link to="/adddata" >Add data</Link>
            </div>
            <Link to="/getdata" >Get data</Link>
        </div>
    )
}

export default Home
