import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/main.css'


export default function Navbar() {
  return (
    <nav className='liste'>
        <Link to='/' className='items'>Accueil</Link>
        <Link to='/services' className='items'>Services</Link>
        <Link to='/about' className='items'>A propos</Link>
        <Link to='/contact' className='items'>Contact</Link>

    </nav>
  )
}