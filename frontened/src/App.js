import './App.css';
import Home from './component/home';
import Form from './component/from';
import Getdata from './component/getdata';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/adddata' element={<Form/>}></Route>
        <Route path='/getdata' element={<Getdata/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
