import React from 'react'
import { Link } from 'react-router-dom'

const logo = "https://w7.pngwing.com/pngs/72/540/png-transparent-computer-icons-encapsulated-postscript-cocktails-text-logo-cocktail.png";

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}