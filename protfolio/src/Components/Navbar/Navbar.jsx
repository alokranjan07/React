import React from 'react'
import './Navbar.css'
import abc  from  '../../assets/abc.png'

const Navbar = () => {
  return (
    <div className="navbar" >
        <img src={abc} alt="logo" className="logo"/> 
        <ul className="nav-menu">
             <li>Home</li>
             <li>About me</li>
             <li>Services</li>
            
             <li>Protfolio</li>

        </ul>
        <div className="nav-connect">
            Connect with me
        </div>
      
    </div>
  )
}

export default Navbar
