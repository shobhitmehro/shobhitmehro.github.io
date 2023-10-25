import React from 'react';
import  './Header.scss';
import { easeInOut, motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';


const Header = () => {
  return (
    <div id='home' className='app__header '>
      <motion.div
        whileInView={{ opacity: [0,1]}}
        transition={{ duration: 0.75, delayChildren: 1}}
        className='app__header-img'
      >
        <img src={images.profile} alt='profile_pic' />
        
      </motion.div>

      <motion.div
        whileInView={{  opacity: [0,1]}}
        transition={{ duration: 0.75}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span> 👋 </span>    
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hi, My Name Is</p>
              <h1 className='head-text'>Shobhit.</h1>
            </div>
          </div>

        <div className='app__header-description-box'>
          <p className='p-text'>Welcome to my web corner! I am a student stuying <b>Computer Science</b> at the University of Massachusetts Amherst with an expected graduation date in 2026. I'm 
          interested pursuing a career in Aritifical Intelligence and Machine Learning, but I also love working on building functional and beautiful fullstack applications. Feel free to contact me so we can chat! I'm open to work internships during Winter 2023/Summer 2024.
          </p>

        </div>

        

        </div>
      </motion.div>

        
      
    </div>
  )
}

export default AppWrap(Header, 'home')