import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './css/navbar.css'

let Navbar = props => {
  return(
    <div className='navbar'>
    <ul>
      <li><Link to='/worldmap'><img className='icon' id='world' src='https://cdn.iconscout.com/public/images/icon/free/png-512/earth-global-globe-international-map-planet-world-31f086acb2c23d8b-512x512.png'/></Link></li>
    </ul>
    </div>
  )
}

export default Navbar
