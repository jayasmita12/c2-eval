import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import {useState , useEffect} from "react"
import axios from "axios"
function App() {
  const [show,setShow]=useState(true)
  const [table,setTable]=useState([])
  useEffect(()=>{
    getdata()
  },[])
  
const getdata=()=>{

  axios.get("http://localhost:8080/students").then((res)=>{
    setTable(res.data)
  })
}


  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>{
        setShow(!show)
        
      }}>
        {show ? "Show UserData" :"show Add students"}Toggle</button>
     {
       show ? <ShowStudents table={table} /> : <AddStudent />
     }
    </div>
  );
}

export default App;
