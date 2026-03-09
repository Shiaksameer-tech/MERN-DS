import React, { use } from 'react'
import { Link,Outlet } from 'react-router-dom'
import './Hooks.css'

const Hooks = () => {
  
  return (
    <div>
        <Link to="useState">useState</Link>
        <Outlet/>
        <ul className="nestedList">
            <li><Link to="useState" className='nestedLink'>useState</Link></li>
            <li><Link to="form" className='nestedLink'>form</Link></li>
            <li><Link to="effects" className='nestedLink'>effect</Link></li>
            <li><Link to="useEffectApi" className='nestedLink'>EffectWithApi</Link></li>
            <li><Link to="useRef" className='nestedLink'>useRef</Link></li>
            <li><Link to="useRecuder" className='nestedLink'>Recuder</Link></li>
            <li><Link to="useMemo" className='nestedLink'>Memo</Link></li>
            <li><Link to="useCallBack" className='nestedLink'>Memo</Link></li>
          
          
            
        </ul>
        <Outlet/>
    </div>
  )
}

export default Hooks