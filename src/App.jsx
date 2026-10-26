import React,{useState} from 'react'
import "./App.css"
import "./Classname.css"
const App = () => {
  const[name,setName]=useState("");
  const[msg,setMsg]=useState("");
  const[type,setType]=useState("");
  const handleCheck=()=>{
    if (name.trim()===""){
      setMsg("please enter your name");
      setType("error");
    }else{
      setMsg("Name looks Good")
      setType("success");
    }
  };
  return (
    <div>
     <input type="text" placeholder="Enter your name: " onChange={(e)=>setName(e.target.value)}/>
     <button onClick={handleCheck}>Submit</button>
     <h3>{msg&&<p className={type}>{msg}</p>}</h3>

    </div>
  )
}

export default App
