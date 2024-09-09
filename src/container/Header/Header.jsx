import React from 'react';
import  './Header.scss';
import { easeInOut, motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const head_text_1 = "Hello! My name is Shobhit, and I am an undergraduate student at the University of Massachusetts Amherst studying computer science";
const head_text_2 = "I'm adept in full-stack development as well as machine learning and cloud computing. I'm looking to work internships during Winter 2024/Summer 2025";

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-name'>
        <h1>Shobhit Mehrotra</h1>
      </div>
      <div className='header-text'>
        <p>{head_text_1}</p>
      </div>
      <div className='header-text'>
        <p>{head_text_2}</p>
      </div>
  
    </div>
  )
}

export default Header