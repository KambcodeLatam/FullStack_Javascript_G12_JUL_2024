import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='containerNavbar'>
        <ul>
            <li>
                <NavLink to='/' className={({isActive}) => (isActive) ? 'error' : ''}>
                    Home
                </NavLink>
                
            </li>
            <li> 
                <NavLink to='about' className={({isActive}) => (isActive) ? 'error' : ''}>
                    About
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar