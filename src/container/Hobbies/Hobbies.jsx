import React from 'react'
import  './Hobbies.scss';
import { motion } from 'framer-motion';
import { urlFor, client} from '../../client';
import { AppWrap } from '../../wrapper';
import  { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';




const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index)
  }
  useEffect(() => {
    const query = '*[_type == "hobbies"]'
    
      client.fetch(query)
      .then((data) => {
        setHobbies(data);
      })
  }, [])


  const hobby = hobbies[currentIndex]
  return (
    <div className='app__hobbies'>
      <div className='header'>
        <h2 className='head-text'>Stuff I do for fun</h2>
      </div>
      <div className='app__hobbies-container'>
      {hobbies.length && (
        <>
          <div className='app__hobbies-item app__flex'>
            <div className='app__hobby-content'>
                <h3 className='bold-text'>{hobby.name}</h3>
                <a href={hobbies.subheading} target='_blank' rel='noreferrer'>{hobby.subheading}</a>
                <p className='p-text'>{hobby.desc}</p> 
            </div>
            <img src={urlFor(hobby.imageurl)} alt='hobby'/> 
            
          </div>

          <div className='app__hobbies-button'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? hobbies.length - 1 : currentIndex-1)}>
                <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIndex === hobbies.length - 1 ? 0 : currentIndex+1)}>
                <HiChevronRight />
            </div>

          </div>
        </>
      )}
      </div>

    </div>
  )
}

export default AppWrap(Hobbies, 'hobbies')