import React from "react" 
import Home from "./pages/Home"
import { Link, Route, Routes } from "react-router-dom"
import Projects from "./pages/Projects"
import Agence from "./pages/Agence"
const  App=()=> {
  

  return (
    <div className=" text-white">  
    
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/agence" element={<Agence />} />
    <Route path="/projects" element={<Projects/>}/>
   </Routes>
   </div>
  )
}

export default App
