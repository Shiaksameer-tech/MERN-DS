import React, { use } from 'react'
import { Link,Outlet } from 'react-router-dom'
import './Hooks.css'
import Effect from './Effect'

const Hooks = () => {
  
  return (
    <div>
        {/* <Link to="useState">useState</Link>
        <Outlet/> */}
        <ul className="nestedList">
            <li><Link to="useState" className='nestedLink'>useState</Link></li>
            <li><Link to="form" className='nestedLink'>form</Link></li>
            <li><Link to="effects" className='nestedLink'>effect</Link></li>
            <li><Link to="useEffectApi" className='nestedLink'>EffectWithApi</Link></li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Hooks