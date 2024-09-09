import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub } from "react-icons/bs"



const Navbar = () => {

  return (

  <div className='navbar-whole'>
    <nav className="navbar">
      <div className='navbar-menu'>
          <div className='navbar-logo'>
          <img src={images.nav_logo} alt="Logo" />
          </div>
          <ul className="navbar-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          <div className='navbar-social'>
              <a href='https://www.linkedin.com/in/shobhit-m/' target='_blank' rel='noreferrer' alt='linkedlin'>
                <div>          
                  <BsLinkedin className='linkedin'/>
                </div>
              </a>
              <a href='https://github.com/shobhitmehro' target='_blank' rel='noreferrer'>
                <div>
                  <BsGithub className='github' />
                </div>
              </a>

          </div>
      </div>
            
      </nav>
  </div>
  )
}

export default Navbar