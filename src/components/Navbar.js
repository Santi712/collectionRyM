import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor =() => {
        if(window.scrollY >= 100 ) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <h1>titulo</h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/weather'>Registro</Link>
            </li>
            <li>
                <Link to='/gifs'>Login</Link>
            </li>
            <li>
                <Link to='/Merc'>Merch</Link>
            </li>
            <li>
                <Link to='/contact'>Contacto</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: 'white'}} />) : <FaBars size={20} style={{color: 'white'}}/> }
            
        </div>
    </div>
  )
}

export default Navbar