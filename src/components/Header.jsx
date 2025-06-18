import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <header>
         <h1>Fresh Mart</h1>
       <nav>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
         <Link to='/Services'> Services</Link>
          <Link to='/Contact'>Contact</Link>
          <Link to='/Login'>Login</Link>
       </nav>
      </header>
    </div>
     
  )
}

