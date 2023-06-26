import React from 'react'
import "./Education.css"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcGraduationCap } from 'react-icons/fc';

import Slide from 'react-reveal/Slide';

function Education() {
  const data = [
    {
        name: "Udemy",
        degree: "B.sc in software Engineering",
        year: "2020-2023",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
  ]

  const colors = [
    "#27eaef",
  ]

  return (
    <div className='container education-section' id='education'>
        <div className='section-title'>
          <h3> Education </h3>
          <span className='line'></span>
        </div>

        <VerticalTimeline lineColor={'red'}>
            {data.map((item, index) => {
                return (
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: colors[index], color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid '+ colors[index] }}
                        date={item.year}
                        dateClassName='date-class' 
                        iconStyle={{ background: colors[index], color: '#fff' }}
                        icon={<FcGraduationCap />}
                    >
                        <h3 className="vertical-timeline-element-title">{item.name}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.degree}</h4>
                        <p>
                            {item.des}
                        </p>
                    </VerticalTimelineElement>
                    
                )

            })}

        
        </VerticalTimeline>

    </div>
  )
}

export default Education