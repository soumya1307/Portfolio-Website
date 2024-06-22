import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo-2.png'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu-2.png'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div>
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='inactive' to="intro" spy={true} smooth={true} offset={0} duration={1000} className="desktopMenuListItem">Home</Link>
                <Link activeClass='inactive' to="skills" spy={true} smooth={true} offset={-30} duration={1000} className="desktopMenuListItem">About Me</Link>
                <Link activeClass='inactive' to="works" spy={true} smooth={true} offset={-60} duration={1000} className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() =>
            {
              document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
            }}>
              <img src={contactImg} alt="Contact" className="desktopMenuImg" />Contact Me
            </button>
              <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                <Link activeClass='inactive' to="intro" spy={true} smooth={true} offset={0} duration={1000} className="listItem" onClick={() => setShowMenu(false)} >Home</Link>
                <Link activeClass='inactive' to="skills" spy={true} smooth={true} offset={-30} duration={1000} className="listItem" onClick={() => setShowMenu(false)} >About Me</Link>
                <Link activeClass='inactive' to="works" spy={true} smooth={true} offset={-60} duration={1000} className="listItem" onClick={() => setShowMenu(false)} >Portfolio</Link>
                <Link activeClass='inactive' to="contact" spy={true} smooth={true} offset={-90} duration={1000} className="listItem" onClick={() => setShowMenu(false)} >Contact</Link>
            </div>
        </nav>
    </div>
  )
}
