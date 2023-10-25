import  './Skills.scss';
import React, { useState, useEffect } from 'react';
//import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion';
import { urlFor, client} from '../../client';
import { AppWrap } from '../../wrapper';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]'
    
      client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
  }, [])

  return (
    <div className='app__skills'>
      <hr className='line'/>
      <h2 className='head-text'> What I know </h2>

      <div className='app__skills-container'>
        <div
          className='app__skills-list'>
            {skills.map((skill) => (
              <div
                className='app__skills-item app__flex'
              >
                <div className='app__flex' style = {{backgroundColor: skill.bgColor}}>
                  <img src={urlFor(skill.icon)} alt={skill.name}/>
                </div>
                <p className='p-text'> {skill.name} </p>
              </div>


            ))}

        </div>

        
          
      </div>


    </div>
  )
}

export default AppWrap(Skills, 'skills')