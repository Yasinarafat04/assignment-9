import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const [resNav, setResnav] = useState('topnav')
  const navControlar = () => {
    if (resNav === "topnav") {
      setResnav("responsive")
    } else {
      setResnav("topnav")
    }
  }
  return (
    <nav>
      <div className='nav-content'>
        <div className='logo'>
          <Link to='/'> <h1>YAMAHA BIKE Review</h1></Link>
          <i onClick={navControlar} className="fa-solid fa-bars"></i>
        </div>
        <ul className={resNav} id='nav-manu'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/review'>Review</NavLink></li>
          <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
          <li><NavLink to='/blogs'>Blogs</NavLink></li>


        </ul>
      </div>
    </nav>
  )
}

export default Navbar;