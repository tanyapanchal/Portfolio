import React, { useState } from 'react'
import './navbar.css'
import logo from '../../Sources/logo.png';
import contact from '../../Sources/contact.png'
import {Link} from 'react-scroll'
import menu from '../../Sources/menu.jpg'

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);                           
  return (
    <div>
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-125} duration={500} className="menuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="menuListItem">About</Link>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="menuListItem">Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="menuListItem">Clients</Link>
        </div>
        <button className="menubtn" onClick={()=>{document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}>
            <img src={contact} alt="" className="desktopimg" />
Contact Me        </button>


<img src={menu} alt="Logo" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display : showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
