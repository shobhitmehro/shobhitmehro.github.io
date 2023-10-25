import React, { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub } from "react-icons/bs"


const Navbar = () => {
  const [toggle, setToggle] = useState(false) 

  return (

    

  <div className='back'>
    <nav className="app__navbar">
        <div className='app__navbar-social'>
        <a href='https://www.linkedin.com/in/shobhit-m/' target='_blank' rel='noreferrer' alt='linkedlin'>
          <div>          
            <BsLinkedin className='one'/>
          </div>
          </a>
          <a href='https://github.com/shobhitmehro' target='_blank' rel='noreferrer'>
          <div>
            <BsGithub className='two' />
          </div>
          </a>
        </div>
        
        <ul className="app__navbar-links">
           {[ 'home', 'skills', 'projects', 'hobbies', 'contact'].map((item) => (
              <li className="app__flex p-text" key = {`link'-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
           ))}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)}/> 

          {toggle && (
            <motion.div
            whileInView={{ y: [-200,0]}}
            transition={{ duration: 1.2, ease:'easeInOut'}}
            >
              <HiX onClick={() => setToggle(false)}/>
              <ul>
                {[ 'home', 'skills', 'projects', 'hobbies', 'contact'].map((item) => (
                <li key = {item}>
                  
                  <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                </li>
              ))}
              </ul>
            </motion.div>
          )}

        </div>
    </nav> 
  </div>
  )
}

export default Navbar