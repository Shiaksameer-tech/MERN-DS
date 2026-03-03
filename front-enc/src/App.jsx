import React from 'react'
import  Navbar  from "./components/Navbar"
import Parent from "./components/Parent"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Service from "./pages/Service"
import { Routes,Route } from 'react-router-dom'

const App = () => {
  const element = <div>Hello Sammm!</div>
  return (
    <>
    {/* <Parent/> */}
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
    </Routes>
  
    </>
  )
}

export default App