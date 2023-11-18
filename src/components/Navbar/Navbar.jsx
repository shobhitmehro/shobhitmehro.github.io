import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub } from "react-icons/bs"


const Navbar = () => {
  const [toggle, setToggle] = useState(false) 
  const [visible, setVisible] = useState(true)
  const [isClicked, setIsClicked] = useState(false)
  const navClass = isClicked ? 'app__navbar-Click' : "app__navbar"


  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width > 900) {
        setIsClicked(false)

        
        
      }
      if (width < 900 && toggle) {
          
        setToggle(false)
      }
      
    };

    // Initial call to set the screen size on component mount
    handleResize();

    // Event listener to update screen size on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  
  return (

    

  <div className='back'>


    <>
    {true && (
    <nav className={navClass}>
        <>
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
        </>

        <div className='app__navbar-menu'>

          {toggle ? 
                <HiX className='svg1' onClick={() => [setToggle(false), setVisible(true),setIsClicked(false)]}/>

          :
                <HiMenuAlt4 className='svg2' onClick={() => [setToggle(true),setVisible(false),setIsClicked(true)]}/> 

          }

              {toggle && ( 
            <div className='menu'>
            
              <ul>
                {[ 'home', 'skills', 'projects', 'hobbies', 'contact'].map((item) => (
                <li key = {item}>
                  
                  <a href={`#${item}`} onClick={() => [setToggle(false),setIsClicked(false)]} >{item}</a>
                </li>
              ))}
              </ul>
            </div>
          )}
          </div>
      
    </nav>
      )}
      </>

      
      
        

        
        
        
        
     
          
          



        
    
  </div>
  )
}

export default Navbar