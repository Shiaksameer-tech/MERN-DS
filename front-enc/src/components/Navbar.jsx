import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div>
        <nav >
            <ul className="navbar">
                <li className="list">
                    <Link to="/">Home</Link>

                </li>
                <li className="list">
                    <Link to="/about">About</Link>
                </li>
                <li className="list">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="list">
                    <Link to="/service">Service</Link>
                    
                </li>
            </ul>
        </nav>

    </div>
    
    </>
    
  )
}
export default Navbar