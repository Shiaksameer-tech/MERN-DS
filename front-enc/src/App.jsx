import React from 'react'
import  Navbar  from "./components/Navbar"
import Parent from "./components/Parent"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Service from "./pages/Service"
import { Routes,Route } from 'react-router-dom'
import State from './hooks/State'
import Hooks from './hooks/Hooks'
import Form from './hooks/Form'
import Effect from './hooks/Effect'
import EffectWithApi from './hooks/EffectWithApi'
import Login from './Auth/Login'
import { Ref } from './hooks/Ref'
import Recuder from './hooks/Recuder'
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
      <Route path="/useState" element={<State/>}></Route>
      <Route path='/login' element={<Login/>}/>
      <Route path="/hooks" element={<Hooks/>}>
          <Route path="useState" element={<State/>}/>
          <Route path="form" element={<Form/>}/>
          <Route path="effects" element={<Effect/>}/>
          <Route path="useEffectApi" element={<EffectWithApi/>}/>
          <Route path="useRef" element={<Ref/>}></Route>
          <Route path="useRecuder" element={<Recuder/>}></Route>
      </Route>

    </Routes>
  
    </>
  )
}

export default App