import React, {useState} from 'react';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { client } from '../../client';
import timelineElements from './timelineElements';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import {ReactComponent as UMass} from "../../assets/umass.svg";
import {ReactComponent as Reg} from "../../assets/coding.svg";
import  './Experience.scss';
import { BsBorder } from 'react-icons/bs';


const Experience = () => {
  return (
    
    <div className='exp-main'>
    <VerticalTimeline
    lineColor="#00468c80"
    >
        {
            timelineElements.map(e => {
                return (
                    <VerticalTimelineElement
                    key = {e.key}
                    date = {e.date}
                    dateClassName='date'
                    iconStyle={{background: "#ffffff"}}
                    icon = {e.icon === "umass" ? <UMass/>  : <Reg/>}
                    contentStyle={{background: "#000a18", color: 'grey', boxShadow: "#00468c"}}
                    >
                    <h4 className='timeline-title'>{e.title}</h4>
                    <h5 className='timeline-subtitle'>{e.location}</h5>
                    <p id='desc'>{e.description}</p>
                    </VerticalTimelineElement>
                )
            })
        }

    </VerticalTimeline>
    </div>
  )
}

export default AppWrap(Experience, 'experience')